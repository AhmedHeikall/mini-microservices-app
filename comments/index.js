const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const { randomBytes } = require("crypto");

const app = express();
app.use(bodyparser.json());
app.use(cors());

// key -> id of a post: string , value -> {id of a comment: string, content: string}
commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content, status: "pending..." });

  commentsByPostId[req.params.id] = comments;

  await axios.post("http://event-bus-srv:4005/events", {
    type: "commentCreated",
    data: {
      id: commentId,
      content,
      status: "pending...",
      postId: req.params.id,
    },
  });

  res.status(201).send(comments);
});

app.post("/events", async (req, res) => {
  console.log("CommentEvent Received:", req.body.type);

  const { type, data } = req.body;

  if (type === "commentModerated") {
    const { postId, id, status, content } = data;
    const comments = commentsByPostId[postId];

    const comment = comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;

    await axios.post("http://event-bus-srv:4005/events", {
      type: "commentUpdated",
      data: {
        id,
        status,
        postId,
        content,
      },
    });
  }

  res.send({});
});

app.listen(4001, () => {
  console.log("listen on 4001");
});

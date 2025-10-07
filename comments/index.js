const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const { randomBytes } = require("crypto");

const app = express();
app.use(bodyparser.json());
app.use(cors());

// key -> id of a post: string , value -> {id of a comment: string, content: string}
commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content });

  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

app.listen(4001, () => {
  console.log("listen on 4001");
});

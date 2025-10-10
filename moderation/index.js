const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyparser.json());
app.use(cors());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  if (type === "commentCreated") {
    const status = data.content.includes("orange") ? "rejected." : "approved";

    await axios.post("http://localhost:4005/events", {
      type: commentCreated,
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content,
      },
    });
    res.send({});
  }
});

app.listen(4003, () => {
  console.log("Moderator Listening on 4003");
});

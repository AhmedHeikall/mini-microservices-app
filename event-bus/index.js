const express = require("express");
const bodyparser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(bodyparser.json());
app.use(cors());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  // send request to all running services

  //PostService
  axios.post("http://posts-clusterip-srv:4000/events", event).catch((err) => {
    console.log(err.message);
  });
  //CommentService
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log(err.message);
  });
  //QueryService
  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log(err.message);
  });
  //ModerationService
  axios.post("http://localhost:4003/events", event).catch((err) => {
    console.log(err.message);
  });

  res.send({ status: "ok" });
});

// event syncing
app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("event-bus listening on 4005");
});

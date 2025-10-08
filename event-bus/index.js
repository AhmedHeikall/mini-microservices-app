const express = require("express");
const bodyparser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyparser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  // send request to all running services
  axios.post("http://localhost:3000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log(err.message);
  });

  res.send({ status: "ok" });
});

app.listen(4004, () => {
  console.log("event-bus listening on 4005");
});

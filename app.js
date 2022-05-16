const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const mongoDB = "mongodb://127.0.0.1/THE-BIG-HOTEL";
const guestRouter = require("./routers/guest");
const roomRouter = require("./routers/room");
const reservationRouter = require("./routers/reservation");
const path = require("path");
const axios = require("axios").default;
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/guests", guestRouter);
app.use("/rooms", roomRouter);
app.use("/reservation", reservationRouter);

app.get("/showMeAll", function (req, res) {
  axios
    .get("/guests")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/*", function (req, res) {
  res.status("404");
  res.sendFile(path.join(__dirname, "/eror.html"));
});
mongoose
  .connect(mongoDB)
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((e) => console.error(e));

const Room = require("./controlers/room");

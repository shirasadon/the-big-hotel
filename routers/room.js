const express = require("express");
const router = express.Router();
const {
  addRooms,
  getAllRooms,
  getRoom,
  updateRoom,
  deleteRoom,
  haveBathroom,
  haveBathroomOrVip,
  roomOverThreeGuests,
} = require("../controlers/room");
const Room = require("../models/room");
router.post("/", (req, res) => {
  const isVip = req.body.isVip;
  const haveBath = req.body.haveBath;
  const roomNumber = req.body.roomNumber;
  addRooms(isVip, haveBath, roomNumber)
    .then((room) => res.json(room))
    .catch((err) => res.json(err));
});

router.get("/", (req, res) => {
  getAllRooms()
    .then((rooms) => {
      res.json(rooms);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/:theid", (req, res) => {
  getRoom(req.params.theid)
    .then((room) => {
      res.json(room);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const isVip = req.body.isVip;
  const haveBath = req.body.haveBath;
  const roomNumber = req.body.roomNumber;
  updateRoom(id, isVip, haveBath, roomNumber)
    .then((room) => {
      console.log(room);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/:id", (req, res) => {
  const _id = req.params.id;
  deleteRoom(_id)
    .then((room) => {
      console.log(room);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/roomsHaveBath/true", (req, res) => {
  haveBathroom()
    .then((bath) => {
      res.json(bath);
      console.log(bath);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/batheorvip/true", (req, res) => {
  haveBathroomOrVip()
    .then((vip) => {
      res.json(vip);
      console.log(vip);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;

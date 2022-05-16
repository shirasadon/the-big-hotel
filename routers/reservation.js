const express = require("express");
const router = express.Router();
const Reservation = require("../models/reservation");
const {
  addReserv,
  getReserv,
  getReservs,
  updateReserv,
  deleteReserv,
  roomOverThreeGuests,
} = require("../controlers/reservation");

router.post("/", (req, res) => {
  const room_id = req.body.room_id;
  const capacity = req.body.capacity;

  addReserv(room_id, capacity)
    .then((reserv) => res.json(reserv))
    .catch((err) => res.json(err));
});

router.get("/", (req, res) => {
  getReservs()
    .then((reserv) => {
      res.json(reserv);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/:theid", (req, res) => {
  getReserv(req.params.theid)
    .then((reserv) => {
      res.json(reserv);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const room_id = req.body.room_id;
  const capacity = req.body.capacity;
  updateReserv(id, room_id, capacity)
    .then((reserv) => {
      console.log(reserv);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/:id", (req, res) => {
  const _id = req.params.id;
  deleteReserv(_id)
    .then((reserv) => {
      console.log(reserv);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;

router.get("/", (req, res) => {
  getReservs()
    .then((reserv) => {
      res.json(reserv);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/overThree/true", (req, res) => {
  roomOverThreeGuests()
    .then((overThree) => {
      res.json(overThree);
      console.log(overThree);
    })
    .catch((err) => {
      res.json(err);
    });
});

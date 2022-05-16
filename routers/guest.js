const express = require("express");
const router = express.Router();
const {
  addGuests,
  getAllGuests,
  getGuest,
  updateGuest,
  deleteGuest,
  canDrink,
} = require("../controlers/guest");
const Guest = require("../models/guest");

router.post("/", (req, res) => {
  const name = req.body.name;
  const gender = req.body.gender;
  const dateOfBirth = req.body.dateOfBirth;
  const isVip = req.body.isVip;

  addGuests(name, gender, dateOfBirth, isVip)
    .then((guest) => res.json(guest))
    .catch((err) => res.json(err));
});

router.get("/", (req, res) => {
  getAllGuests()
    .then((guests) => {
      res.json(guests);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/:theid", (req, res) => {
  getGuest(req.params.theid)
    .then((guest) => {
      res.json(guest);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const gender = req.body.gender;
  const dateOfBirth = req.body.dateOfBirth;
  const isVip = req.body.isVip;
  updateGuest(id, name, gender, dateOfBirth, isVip)
    .then((guest) => {
      console.log(guest);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/:id", (req, res) => {
  const _id = req.params.id;
  deleteGuest(_id)
    .then((guest) => {
      console.log(guest);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/canDrink", (req, res) => {
  canDrink()
    .then((can) => {
      res.json(can);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;

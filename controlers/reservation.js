const Reservation = require("../models/reservation");

const addReserv = (room_id, capacity) => {
  return new Promise((resolve, reject) => {
    const room = new Reservation({
      room_id,
      capacity,
    });
    room
      .save()
      .then((reserv) => {
        resolve(reserv);
      })
      .catch((err) => reject(err));
  });
};

const getReservs = () => {
  return new Promise((resolve, reject) => {
    Reservation.find()
      .then((reserv) => resolve(reserv))
      .catch((err) => reject(err));
  });
};

const getReserv = (_id) => {
  return new Promise((resolve, reject) => {
    Reservation.findById(_id)
      .lean()
      .then((reserv) => resolve(reserv))
      .catch((err) => reject(err));
  });
};

const updateReserv = (_id, room_id, capacity) => {
  return new Promise((resolve, reject) => {
    Reservation.findByIdAndUpdate(_id, { $set: { room_id, capacity } })
      .then((reserv) => {
        resolve(reserv);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const deleteReserv = (_id) => {
  return new Promise((resolve, reject) => {
    Reservation.findByIdAndDelete(_id)
      .then((reserv) => {
        resolve(reserv);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const roomOverThreeGuests = () => {
  return new Promise((resolve, reject) => {
    Reservation.find({ capacity: { $gte: 3 } })
      .then((overThree) => {
        resolve(overThree);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
exports.addReserv = addReserv;
exports.getReservs = getReservs;
exports.getReserv = getReserv;
exports.updateReserv = updateReserv;
exports.deleteReserv = deleteReserv;
exports.roomOverThreeGuests = roomOverThreeGuests;

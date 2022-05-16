const Room = require("../models/room");

const addRooms = (isVip, haveBath, roomNumber) => {
  return new Promise((resolve, reject) => {
    const room = new Room({
      isVip,
      haveBath,
      roomNumber,
    });
    room
      .save()
      .then((room) => {
        resolve(room);
      })
      .catch((err) => reject(err));
  });
};

const getAllRooms = () => {
  return new Promise((resolve, reject) => {
    Room.find()
      .then((room) => resolve(room))
      .catch((err) => reject(err));
  });
};

const getRoom = (_id) => {
  return new Promise((resolve, reject) => {
    Room.findById(_id)
      //   .lean()
      .then((room) => resolve(room))
      .catch((err) => reject(err));
  });
};

const updateRoom = (_id, isVip, haveBath, roomNumber) => {
  return new Promise((resolve, reject) => {
    Room.findByIdAndUpdate(_id, { $set: { isVip, haveBath, roomNumber } })
      .then((room) => {
        resolve(room);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const deleteRoom = (_id) => {
  return new Promise((resolve, reject) => {
    Room.findByIdAndDelete(_id)
      .then((room) => {
        resolve(room);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const haveBathroom = () => {
  return new Promise((resolve, reject) => {
    Room.find({ haveBath: true })
      .then((bath) => {
        resolve(bath);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const haveBathroomOrVip = () => {
  return new Promise((resolve, reject) => {
    Room.find({ haveBath: true, isVip: true })
      .then((vip) => {
        resolve(vip);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

exports.addRooms = addRooms;
exports.getAllRooms = getAllRooms;
exports.getRoom = getRoom;
exports.updateRoom = updateRoom;
exports.deleteRoom = deleteRoom;
exports.haveBathroom = haveBathroom;
exports.haveBathroomOrVip = haveBathroomOrVip;

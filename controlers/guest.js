const Guest = require("../models/guest");
// const {validateGustSchema}=require("../models/guest")
const addGuests = (name, gender, dateOfBirth, isVip) => {
  return new Promise((resolve, reject) => {
    const guest = new Guest({
      name,
      gender,
      dateOfBirth,
      isVip,
    });
    guest
      .save()
      .then((guest) => {
        resolve(guest);
      })
      .catch((err) => reject(err));
  });
};

const getAllGuests = () => {
  return new Promise((resolve, reject) => {
    const guest = Guest.find()
      // guest.validateGustSchema()
      .then((guests) => resolve(guests))
      .catch((err) => reject(err));
  });
};

const getGuest = (_id) => {
  return new Promise((resolve, reject) => {
    Guest.findById(_id)
      .lean()
      .then((guest) => resolve(guest))
      .catch((err) => reject(err));
  });
};

const updateGuest = (_id, name, gender, dateOfBirth, isVip) => {
  return new Promise((resolve, reject) => {
    Guest.findByIdAndUpdate(_id, { $set: { name, gender, dateOfBirth, isVip } })
      .then((guest) => {
        resolve(guest);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const deleteGuest = (_id) => {
  return new Promise((resolve, reject) => {
    Guest.findByIdAndDelete(_id)
      .then((guest) => {
        resolve(guest);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// const canDrink = () => {
//   return new Promise((resolve, reject) => {
//     const start = new Date(2001 - 04 - 01);
//     start.setHours(0, 0, 0, 0);
//     const end = new Date(2022 - 04 - 01);
//     end.setHours(23, 59, 59, 999);
//     queryFilter.created_at = {
//       $gte: start,
//       $lte: end,
//     };
//     Guest.find(queryFilter);
//   });
// };
exports.addGuests = addGuests;
exports.getAllGuests = getAllGuests;
exports.getGuest = getGuest;
exports.updateGuest = updateGuest;
exports.deleteGuest = deleteGuest;
// exports.canDrink = canDrink;

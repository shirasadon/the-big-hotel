const mongoose = require("mongoose");
const { Schema } = mongoose;
const Joi = require("@hapi/joi");
const customJoi = Joi.extend(require("joi-age"));

const guestSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  dateOfBirth: {
    type: Date,
    require: true,
  },
  isVip: {
    type: Boolean,
    require: true,
  },
});
const Guest = mongoose.model("Guest", guestSchema);
guestSchema.methods.validateGustSchema = function (dateOfBirth) {
  const canDrink = customJoi.date(dateOfBirth).minAge(21);
  return canDrink;
};

module.exports = Guest;
// module.exports=validateGustSchema

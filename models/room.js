const mongoose = require("mongoose");
const { Schema } = mongoose;

const roomSchema = new Schema({
  roomNumber: {
    type: Number,
    required: true,
  },
  haveBath: {
    type: Boolean,
    required: true,
  },
  isVip: {
    type: Boolean,
    required: true,
  },
});
const Room = mongoose.model("Room", roomSchema);

module.exports = Room;

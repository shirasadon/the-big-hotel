const mongoose = require("mongoose");
const { Schema } = mongoose;

const reservationSchema = new Schema({
  room_id: {
    type: Schema.Types.ObjectId,
    ref: "Room",
    require: true,
  },
  capacity: {
    type: Number,
    require: true,
  },
});
const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;

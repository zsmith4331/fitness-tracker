// Dependencies //
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
      type: Date,
      default: new Date().setDate(new Date().getDate())
    },
    exercises: Array
}
);
  
  const workout = mongoose.model("Workout", workoutSchema);

  // Export the database//
  module.exports = workout;
  
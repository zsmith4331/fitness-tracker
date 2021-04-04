// Dependencies //
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
      type: Date,
      default: Date.now
    },
    exercises: []
  });
  
  const workout = mongoose.model("Workout", workoutSchema);
  
  // Export the database //
  module.exports = workout;
  
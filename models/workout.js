// Dependencies //
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { type: Date, default: () => new Date() },
  exercises: Array  
},
{
  toJSON: {
    virtuals: true
  }
}
);

workoutSchema.virtual("totalDuration").get(function () {
  const duration = this.exercises.reduce((total, current) => {return total + current.duration}, 0);
  return duration;
});  

const workout = mongoose.model("Workout", workoutSchema);

// Export the database//
module.exports = workout;
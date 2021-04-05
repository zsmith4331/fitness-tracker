// Dependencies //
const router = require("express").Router();

const { request, response } = require("express");
// Required database //
const db = require("../models"); 

//  Get Route //
router.get("/workout", (request, response) => {
    db.Workout.find({})
    .then(dbWorkout => {      
      response.json(dbWorkout);
    })
    .catch(error => {
      response.status(404).json(error);
    });
});

router.post("/workout", (request, response) => {
    db.Workout.create
})

// Post Route //
router.post("/workout", ({ body }, res) => {
    db.Workout.create(body)
      .then(results => {
        response.json({ success: true });
      })
      .catch(error => {
        response.status(404).json(error);
      });
  });
// Dependencies //
const router = require("express").Router();
const { Workout } = require("../models");

// Required database //
const db = require("../models"); 

//  Get Routes //
router.get("/api/workouts", async (request, response) => {
    const results = await db.Workout.find();
    response.json(results)
});

router.get("/api/workouts/range", async (request, response) => {
    const results = await db.Workout.find();
    response.json(results);
});

// Post Route //
router.post("/api/workouts", async (request, response) => {
    const results = await db.Workout.create(request.body);
    response.json(results);
});

// Put Route //
router.put("/api/workouts/:id", async (request, response) => {
    const results = await db.Workout.updateOne(
        { _id: request.params.id },
        { $push: { exercises: request.body } }  
    );
    response.json(results);
});

module.exports = router;
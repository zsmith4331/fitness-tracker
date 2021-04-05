// Dependencies //
const router = require("express").Router();
const { request, response } = require("express");

// Required database //
const db = require("../models"); 

//  Get Route //
router.get("/workout", async (request, response) => {
    const results = await db.Workout.find();
    response.json(results)
});

// Post Route //
router.post("/workout", async (request, response) => {
    const results = await db.Workout.create(request.body);
    response.json(results);
});

// Put Route //
router.put("workout/:id", async (request, response) => {
    const results = await db.Workout.updateOne(
        { _id: req.params.id },
        { $push: { exercises: req.body } }  
    );
    response.json(results);
});

module.exports = router;
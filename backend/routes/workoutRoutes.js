const express = require("express");
const router = express.Router();

const {
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout,
} = require("../controllers/workoutControllers");

// Get all workouts
router.get("/", getWorkouts);
// Get workout
router.get("/:id", getWorkout);
// Create workout
router.post("/", createWorkout);
// Edit workout
router.patch("/:id/edit", updateWorkout);
// Delete workout
router.delete("/:id", deleteWorkout);

module.exports = router;

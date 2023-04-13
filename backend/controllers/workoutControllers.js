const mongoose = require("mongoose");
const Workout = require("../models/WorkoutModel");

// Get all workout
async function getWorkouts(req, res) {
    try {
        const workouts = await Workout.find({})
            .sort({ createdAt: "desc" })
            .exec();
        res.status(200).json({ workouts: workouts });
    } catch (error) {
        res.status(400).json({ errorMessage: error.message });
    }
}

// Get a workout
async function getWorkout(req, res) {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id))
            return res.status(404).json({ error: "Invalid ID!" });
        const workout = await Workout.findById(req.params.id);
        if (!workout)
            return res.status(404).json({ error: "No such workout!" });
        res.status(200).json({ workout: workout });
    } catch (error) {
        res.status(400).json({ errorMessage: error.message });
    }
}

// Create workout
async function createWorkout(req, res) {
    try {
        const { title, reps, sets } = req.body;
        const workout = await Workout.create({ title, reps, sets });
        res.status(200).json({ workout: workout });
    } catch (error) {
        res.status(400).json({ errorMessage: error.message });
    }
}

// Edit workout
async function updateWorkout(req, res) {
    try {
        const workout = await Workout.findByIdAndUpdate(req.params.id, {
            ...req.body,
        });

        if (!workout)
            return res.status(404).json({ message: "No such workout!" });
        res.status(200).json({
            workout: workout,
        });
    } catch (error) {
        res.status(400).json({ errorMessage: error.message });
    }
}

// Delete workout
async function deleteWorkout(req, res) {
    try {
        const workout = await Workout.findByIdAndDelete(req.params.id);
        if (!workout)
            return res.status(404).json({ message: "No such workout!" });
        res.status(200).json({ workout: workout });
    } catch (error) {
        res.status(400).json({ errorMessage: error.message });
    }
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout,
};

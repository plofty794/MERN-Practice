const mongoose = require("mongoose");

const workOutSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        reps: {
            type: Number,
            required: true,
        },
        sets: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Workout", workOutSchema);

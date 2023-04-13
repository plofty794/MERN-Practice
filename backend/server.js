if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workoutRoutes");

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/workouts", workoutRoutes);

app.get("/", (req, res) => {
    res.send("Hello");
});

mongoose
    .connect(process.env.DATABASE_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>
            console.log(
                `Connected to database & Listening on port ${process.env.PORT}`
            )
        );
    })
    .catch((err) => console.error(err));

import React from "react";
import { ACTIONS } from "../WorkoutContext/WorkoutContextComponent";

function Workout({ workout, dispatch }) {
    async function handleDeleteButton(id) {
        const res = await fetch(`/api/workouts/${id}`, {
            method: "DELETE",
        });

        res.ok &&
            dispatch({
                type: ACTIONS.DEL_WORKOUT,
                payload: workout,
            });
    }

    return (
        <div className="workout bg-white shadow-xl p-4 rounded-lg">
            <h1 className="font-bold text-green-700 text-xl">
                {workout.title}
            </h1>
            <p className="font-semibold">Reps: {workout.reps}</p>
            <p className="font-semibold">Sets: {workout.sets}</p>
            <p className="font-semibold">
                Created at: {workout.createdAt.toString().split("T")[0]}
            </p>
            <button
                className="font-bold text-red-800"
                onClick={() => handleDeleteButton(workout._id)}
            >
                Delete
            </button>
        </div>
    );
}

export default Workout;

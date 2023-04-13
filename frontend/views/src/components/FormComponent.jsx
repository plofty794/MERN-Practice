import React, { useState } from "react";
import { ACTIONS } from "../WorkoutContext/WorkoutContextComponent";

function FormComponent({ dispatch }) {
    const [workout, setWorkout] = useState({});
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const { title, reps, sets } = workout;

    async function handleFormSubmit(e) {
        e.preventDefault();
        const res = await fetch("/api/workouts", {
            method: "POST",
            body: JSON.stringify({ title, reps, sets }),
            headers: { "Content-Type": "application/json" },
        });

        const json = await res.json();
        if (res.ok) {
            setIsError((err) => !err);
            setErrorMessage("");
            dispatch({ type: ACTIONS.ADD_WORKOUT, payload: json.workout });
            setWorkout({});
        }
        setIsError((err) => !err);
        setErrorMessage(json.errorMessage);
    }

    function handleInputChange(e) {
        switch (e.target.name) {
            case "title":
                return setWorkout((prevWorkout) => {
                    return { ...prevWorkout, title: e.target.value };
                });
            case "reps":
                return setWorkout((prevWorkout) => {
                    return { ...prevWorkout, reps: e.target.value };
                });
            case "sets":
                return setWorkout((prevWorkout) => {
                    return { ...prevWorkout, sets: e.target.value };
                });
        }
    }

    return (
        <>
            <form
                onSubmit={handleFormSubmit}
                className="flex flex-col items-center gap-2 p-4 shadow-md rounded-lg"
            >
                <div className="w-max">
                    <label htmlFor={"title"}>Title</label>
                    <input
                        className="border-2 border-zinc-500 p-2 text-sm"
                        type="text"
                        name="title"
                        value={workout.title || ""}
                        onChange={handleInputChange}
                        id={"title"}
                    />
                </div>
                <div className="w-max">
                    <label htmlFor="reps">Reps</label>
                    <input
                        className="border-2 border-zinc-500 p-2 text-sm"
                        type="number"
                        min={1}
                        name="reps"
                        value={workout.reps || ""}
                        onChange={handleInputChange}
                        id="reps"
                    />
                </div>
                <div className="w-max">
                    <label htmlFor="sets">Sets</label>
                    <input
                        className="border-2 border-zinc-500 p-2 text-sm"
                        type="number"
                        min={1}
                        name="sets"
                        value={workout.sets || ""}
                        onChange={handleInputChange}
                        id="sets"
                    />
                </div>
                <button className="font-bold text-sm">Add</button>
            </form>
            {isError && (
                <div className="rounded bg-red-500 p-4 m-2 text-xs font-semibold">
                    <p>{errorMessage}</p>
                </div>
            )}
        </>
    );
}

export default FormComponent;

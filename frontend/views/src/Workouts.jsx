import React, { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import {
    ACTIONS,
    WorkoutContext,
} from "./WorkoutContext/WorkoutContextComponent";
import Workout from "./components/Workout";
import AddWorkout from "./components/AddWorkout";

function Workouts() {
    const data = useLoaderData();
    const { workouts, dispatch } = useContext(WorkoutContext);

    useEffect(() => {
        data &&
            dispatch({ type: ACTIONS.GET_WORKOUTS, payload: data.workouts });
    }, []);

    return (
        <>
            <section className="workouts">
                {workouts &&
                    workouts.map((workout) => (
                        <Workout
                            key={workout._id}
                            workout={workout}
                            dispatch={dispatch}
                        />
                    ))}
            </section>
            <section className="add-workout">
                <AddWorkout dispatch={dispatch} />
            </section>
        </>
    );
}

export async function WorkoutsLoader() {
    const res = await fetch("/api/workouts");
    if (!res) throw Error("Error fetching data!");
    return res.json();
}

export default Workouts;

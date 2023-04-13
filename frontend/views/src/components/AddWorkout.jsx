import React from "react";
import FormComponent from "./FormComponent";

function AddWorkout({ dispatch }) {
    return (
        <div className="form-add-workout bg-white">
            <FormComponent dispatch={dispatch} />
        </div>
    );
}

export default AddWorkout;

import React, { useReducer } from "react";

export const WorkoutContext = React.createContext();

export const ACTIONS = {
    GET_WORKOUTS: "GET_WORKOUTS",
    ADD_WORKOUT: "ADD_WORKOUT",
    DEL_WORKOUT: "DEL_WORKOUT",
};

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.GET_WORKOUTS:
            return { workouts: action.payload };
        case ACTIONS.ADD_WORKOUT:
            return { workouts: [action.payload, ...state.workouts] };
        case ACTIONS.DEL_WORKOUT:
            return {
                workouts: state.workouts.filter(
                    (w) => w._id !== action.payload._id
                ),
            };
        default:
            return state;
    }
}

function WorkoutContextComponent({ children }) {
    const [state, dispatch] = useReducer(reducer, { workouts: null });

    state.workouts && console.log([{ ...state }]);

    return (
        <WorkoutContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WorkoutContext.Provider>
    );
}

export default WorkoutContextComponent;

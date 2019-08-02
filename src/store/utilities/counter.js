// This file will have action types, action creators, a reducer function;

// ACTION TYPES;
// Action types are the mandatory value of our action objects that will be read and processed by the switch-statement in the reducer function;
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// ACTION CREATORS;
// Action creators are typically called in your React components and are usually involved with event handling;
export const increment = (amount) => {
    return {
        type: INCREMENT,
        payload: amount
    }
}

export const decrement = (amount) => {
    return {
        type: DECREMENT,
        payload: amount
    }
}

// NORMALLY PUT THUNKS HERE, BUT WE ARE NOT MAKING AN API CALL SO NO NEED FOR THUNKS CURRENTLY;

// REDUCER FUNCTION;
// Part of the reason why we have to return a default value for our switch statement is because combineReducers will go into our object of reducers and invoke all reducer functions to address the incoming action object --- without a default statement, we would return undefined --- which would replace the state of that value to be undefined;
// The other reason for having a default statement is that when an action is sent to the store, all connected components will fire off something along the lines of (psuedocode incoming) Redux.Store.GetState() --- and that should at least have the value of the most up to date state;
export default (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + action.payload;
        case DECREMENT:
            return state - action.payload;
        default:
            return state;
    }
}
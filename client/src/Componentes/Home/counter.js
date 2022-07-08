import React, { useReducer } from "react";
// initial component state
const initialState = { count: 0 };
// string constatnts
const ACTIONS = {
  DECREMENT: "decrement",
  INCREMENT: "increment",
};
// (currentState,actionObject)=> newState
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
     <button onClick={() => {
      // dispatch dispatches the action object to the reducer function 
        dispatch({ type: ACTIONS.DECREMENT })}}>
        decrement
      </button>
      <span>Count: {state.count}</span>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
        increment
      </button>
    </>
  );
}
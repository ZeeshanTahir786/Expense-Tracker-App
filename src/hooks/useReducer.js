import React, { useReducer } from "react";

const initState = {
  counterVal: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counterVal: state.counterVal + action.value };
    case "DECREMENT":
      return { counterVal: state.counterVal - action.value };
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initState);
  console.log(count.counterVal);
  return (
    <div>
      Counter - {count.counterVal} <br />
      <button onClick={() => dispatch({ type: "INCREMENT", value: 1 })}>
        INCREMENT
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 1 })}>
        DECREMENT
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 5 })}>
        DECREMENT 5
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 5 })}>
        INCREMENT 5
      </button>
    </div>
  );
};

export default Counter;

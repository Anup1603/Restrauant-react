import React, { useReducer } from "react";
import "./style.css";

const reducer = (state, action) => {
  if (action.type === "INC") {
    state = state + 1;
  }

  if (state > 0 && action.type === "DEC") {
    state = state - 1;
  }
  return state;
};

const UseReducer = () => {
  const num = 10;
  const [state, dispatch] = useReducer(reducer, num);

  return (
    <React.Fragment>
      <div className="center_div">
        <p>{state}</p>
        <div className="button2" onClick={() => dispatch({ type: "DEC" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DEC
        </div>
        <div className="button2" onClick={() => dispatch({ type: "INC" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INC
        </div>
      </div>
    </React.Fragment>
  );
};

export default UseReducer;

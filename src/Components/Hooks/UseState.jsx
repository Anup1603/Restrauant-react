import React, { useState } from "react";
import "./style.css";

const UseState = () => {
  
  const [myNum, setMyNum] = useState(10);

  const increment = () => {
    if (myNum < 50) {
      setMyNum(myNum + 1);
    }
  };

  const decrement = () => {
    if (myNum !== 0) {
      setMyNum(myNum - 1);
    }
  };

  return (
    <React.Fragment>
      <div className="center-div">
        <p>{myNum}</p>
        <div className="button2" onClick={decrement}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DEC
        </div>
        <div className="button2" onClick={increment}>
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

export default UseState;

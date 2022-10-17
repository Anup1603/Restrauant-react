import React, { useEffect, useState } from "react";
import "./style.css";

const UseEffect = () => {
  const [myNum, setMyNum] = useState(0);

  const increment = () => {
    if (myNum >= 0) {
      setMyNum(myNum + 1);
    }
  };

  useEffect(() => {
    document.title = `Chats (${myNum})`;
  });

  return (
    <React.Fragment>
      <div className="center-div">
        <p>{myNum}</p>
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

export default UseEffect;

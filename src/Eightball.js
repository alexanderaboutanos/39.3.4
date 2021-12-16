/** @format */

import React, { useState } from "react";
import "./Eightball.css";

const Eightball = (props) => {
  function getRandomResponse() {
    return props.answers[Math.floor(Math.random() * props.answers.length)];
  }
  function shakeBall() {
    let response = getRandomResponse();
    newResponse(response.msg);
    newColor(response.color);
  }
  const [response, newResponse] = useState("Think of a Question");
  const [bgColor, newColor] = useState("grey");
  return (
    <div>
      <div
        className="Eightball"
        style={{ backgroundColor: bgColor }}
        onClick={shakeBall}
      >
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Eightball;

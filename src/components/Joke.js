import React from "react";

function Joke(props) {
  return (
    <div>
      <h1 style={{ display: props.question ? "block" : "none" }}>
        Question: {props.question}
      </h1>
      <h3 style={{ color: !props.question && "#888888" }}>
        Answer: {props.answer}
      </h3>
    </div>
  );
}

export default Joke;

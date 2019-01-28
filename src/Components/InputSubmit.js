import React from "react";
import "./inputsubmit.css";

const InputSubmit = props => {
  return (
    <div className="inputsubmit">
      <button onClick={props.handleSubmit} className="submitbutton">
        Get Advice
      </button>
    </div>
  );
};

export default InputSubmit;

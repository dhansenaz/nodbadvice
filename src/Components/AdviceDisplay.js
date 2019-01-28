import React, { Component } from "react";
import "./advicedisplay.css";

class AdviceDisplay extends Component {
  render() {
    return (
      <div className="advice-container">
        <div className="advice-display">
          {/* <h1> Category:<span> {this.props.adviceObj ?                                            this.props.adviceObj.category : "broken"}</span></h1>
            <h1> Title: {this.props.adviceObj ?  
                this.props.adviceObj.title : "broken"}</h1> */}

          {this.props.adviceObj ? this.props.adviceObj.advice : "broken"}
        </div>
      </div>
    );
  }
}

export default AdviceDisplay;

import React, { Component } from "react";
import "./buttongiveadvice.css";
import axios from "axios";

class ButtonGiveAdvice extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    // var id = this.state.props.advice.id
    axios
      .post("/api/advice/create", { advice: this.props.sendAdvice })
      .then(response => {
        console.log(response);
        this.props.sendAdvice;
      });
  }
  shouldComponentUpdate(nextProps) {
    console.log(nextProps);
    if (nextProps.sendAdvice !== this.props.sendAdvice) {
      return true;
    }
    return false;
  }

  render() {
    console.log(this.props);
    return (
      <div className="inputsubmit">
        <button onClick={this.handleSubmit} className="buttongiveadvice">
          Give Advice
        </button>
      </div>
    );
  }
}

export default ButtonGiveAdvice;

import React, { Component } from "react";
import "./displayalladvice.css";
import axios from "axios";
import Consultant from "./Consultant.png";

class DisplayAllAdvice extends Component {
  constructor() {
    super();

    this.state = {
      allAdvice: [],
      editedAdvice: []
    };
    this.displayAdvice = this.displayAdvice.bind(this);
    this.deleteAdvice = this.deleteAdvice.bind(this);
    this.updateAdvice = this.updateAdvice.bind(this);
  }

  displayAdvice() {
    axios.get("/api/advice").then(response => {
      this.setState({ allAdvice: response.data });
    });
  }
  deleteAdvice(id) {
    // let id = req.params.id
    axios.delete(`/api/advice/deleteadvice/${id}`).then(response => {
      console.log(response.data);
      this.setState({ allAdvice: response.data });
    });
  }
  updateAdvice(id) {
    axios.put(`/api/advice/${id}`).then(response => {
      this.setState({ advice: response.data });
    });
  }

  render() {
    let advice = this.state.allAdvice.map(element => {
      return (
        <div key={element.id}>
          {element.advice}
          <button
            className="delete"
            onClick={() => this.deleteAdvice(element.id)}
          >
            DELETE
          </button>
          <button
            className="edit"
            onClick={() => this.updateAdvice(element.id)}
          >
            EDIT
          </button>
        </div>
      );
    });
    return (
      <div className="displayall">
        <button onClick={this.displayAdvice} className="displayalladvice">
          If you wanna see all the advice, Click Here..... Don't be shy.
        </button>
        <div className="alladvicecontainer">
          <ul className="alladvice">{advice}</ul>
          <img className="consultant" src={Consultant} />
        </div>
      </div>
    );
  }
}

export default DisplayAllAdvice;

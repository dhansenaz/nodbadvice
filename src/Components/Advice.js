import React, { Component } from "react";
import "./advice.css";

class Advice extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="advice1">
        {this.props.advice.map(element => {
          return (
            <div>
              <h2>{element.category}</h2>
              <h2>{element.title}</h2>
              <h2>{element.advice}</h2>
            </div>
          );
        })}
        {/* {category}
      {title}
      {advice} */}
      </div>
    );
  }
}

export default Advice;

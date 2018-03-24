import React, { Component } from 'react';
import './buttongiveadvice.css'

class ButtonGiveAdvice extends Component {


  
  render() {
    
    return (
      <div className="inputsubmit">
       {/* <button onClick = {this.props.handleSubmit} className="buttongiveadvice">Give Advice</button> */}
          <button className="buttongiveadvice">Give Advice</button>
      </div>
    );
  }
}

export default ButtonGiveAdvice;
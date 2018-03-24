import React, { Component } from 'react';
import './displayalladvice.css'

class DisplayAllAdvice extends Component {


  
  render() {
    
    return (
      <div className="displayall">
       {/* <button onClick = {this.props.handleSubmit} className="buttongiveadvice">Give Advice</button> */}
          <button className="displayalladvice">If you wanna see all the advice, Click Here.....  Don't be shy.</button>
      </div>
    );
  }
}

export default DisplayAllAdvice;
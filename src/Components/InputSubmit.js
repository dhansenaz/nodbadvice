import React, { Component } from 'react';
import './inputsubmit.css'

class InputSubmit extends Component {


  
  render() {
    
    return (
      <div className="inputsubmit">
       <button onClick = {this.props.handleSubmit} className="submitbutton">Get Advice</button>

      </div>
    );
  }
}

export default InputSubmit;
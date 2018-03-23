import React, { Component } from 'react';
import './advicedisplay.css'

class AdviceDisplay extends Component {
  render() {
    
    return (
      <div>
      
        {this.props.adviceObj}

      </div>
    );
  }
}

export default AdviceDisplay;
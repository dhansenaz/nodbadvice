import React, { Component } from 'react';
import './searchbar.css'
import InputSubmit from './InputSubmit'

class Advice extends Component {
  render() {
    
    return (
      <div>
        <div className="searchline">
            <input className="searchbar" placeholder='  get advice...'/>
            <InputSubmit className="inputsubmit" />
        </div>

      </div>
    );
  }
}

export default Advice;
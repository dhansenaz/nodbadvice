import React, { Component } from 'react';
import './searchbar.css'
import InputSubmit from './InputSubmit'

class Advice extends Component {
  constructor(){
    super()

    this.state = {
      input: ''
    }
  }
  render() {
    
    return (
      <div>
        <div className="searchline">
            <input className="searchbar" placeholder='  ask for advice here.....'/>
        </div>

      </div>
    );
  }
}

export default Advice;
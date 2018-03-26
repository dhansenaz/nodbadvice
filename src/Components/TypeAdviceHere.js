import React, { Component } from 'react';
import './typeadvicehere.css'
import InputSubmit from './InputSubmit'
import axios from 'axios'
import ButtonGiveAdvice from './ButtonGiveAdvice'


class TypeAdviceHere extends Component {
  constructor(){
    super()

    this.state = {
      sendAdvice: ''
    
    }
  }
  
  render() {
    
    return (
      <div>
      
        <div className="typehereline">
          <input className="typeadvicehere" placeholder='  give your advice here...' onChange={(e) => this.setState({sendAdvice: e.target.value}) }/>
          <ButtonGiveAdvice sendAdvice = {this.state.sendAdvice}/>
        </div>
      </div>
    );
  }
}

export default TypeAdviceHere;
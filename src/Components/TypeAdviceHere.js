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
  this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(){
console.log()
.then(response => {
 
})
  }


  render() {
    
    return (
      <div>
        {/* <div className="searchline">
            <input className="searchbar" placeholder='  ask for advice here.....' onChange={(e) =>this.setState({advice:e.target.value})}/>
        <InputSubmit handleSubmit={this.handleSubmit}/>
          
        </div> */}
        <div className="typehereline">
          <input className="typeadvicehere" placeholder='  give your advice here...' />
          <ButtonGiveAdvice />
        </div>
      </div>
    );
  }
}

export default TypeAdviceHere;
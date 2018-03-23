import React, { Component } from 'react';
import './searchbar.css'
import InputSubmit from './InputSubmit'
import axios from 'axios'

class SearchBar extends Component {
  constructor(){
    super()

    this.state = {
      advice: ''
    }
  this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(){
    let firstLetter = this.state.advice[0]
console.log(firstLetter)
axios.get(`/api/advice/${firstLetter}`)
.then(response => {
  console.log(response.data)
  this.props.updateAdvice(response.data)
})
  }


  render() {
    
    return (
      <div>
        <div className="searchline">
            <input className="searchbar" placeholder='  ask for advice here.....' onChange={(e) =>this.setState({advice:e.target.value})}/>
          
        </div>
        <InputSubmit handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default SearchBar;
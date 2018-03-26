import React, { Component } from 'react';
import './buttongiveadvice.css'
import axios from 'axios'

class ButtonGiveAdvice extends Component {

  handleSubmit(){
    console.log(this.props)
    var id = this.state.props.advice.id
    axios.put(`/api/advice/edit/${id}`)
    .then(response => {
     this.props.advice.push()
    })
    this.handleSubmit = this.handleSubmit.bind(this)
    
      }
      shouldComponentUpdate(nextProps){
        console.log(nextProps)
        if(nextProps.sendAdvice !== this.props.sendAdvice){
          return true;
        }
        return false
      }
  
  render() {
    console.log(this.props)
    return (
      <div className="inputsubmit">
       <button onClick = {this.props.handleSubmit} className="buttongiveadvice">Give Advice</button>
          <button className="buttongiveadvice">Give Advice</button>
      </div>
    );
  }
}

export default ButtonGiveAdvice;
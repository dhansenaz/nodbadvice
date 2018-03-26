import React, { Component } from 'react';
import './displayalladvice.css'
import axios from 'axios';

class DisplayAllAdvice extends Component {
  constructor() {
    super()

    this.state = {
      allAdvice: [

      ]
    }
    this.displayAdvice = this.displayAdvice.bind(this)
  }


  displayAdvice() {
    axios.get('/api/advice')
      .then(response => {
        this.setState({ allAdvice: response.data })
      })
  }

  render() {
    let advice = this.state.allAdvice.map((element) => {
      return (
        <div key={element.id}>
          {element.advice}
        </div>
      )
    })
    return (
      <div className="displayall">
        <button onClick={this.displayAdvice} className="displayalladvice">If you wanna see all the advice, Click Here.....  Don't be shy.</button>
        <ul className="alladvice">
          {advice}
        </ul>
      </div>
    );
  }
}

export default DisplayAllAdvice;
import React, { Component } from 'react';
import './App.css';
import Advice from './Components/Advice'
import SearchBar from './Components/SearchBar'
import Header from './Components/Header'
import axios from 'axios'
import InputSubmit from './Components/InputSubmit'
import AdviceDisplay from './Components/AdviceDisplay'
import TypeAdviceHere from './Components/TypeAdviceHere'
import DisplayAllAdvice from './Components/DisplayAllAdvice'


class App extends Component {
  constructor(){
    super()

    this.state = {

      advice: [],
      adviceObj: {}
      
    }

 this.updateAdvice = this.updateAdvice.bind(this)
       
  }
  componentDidMount(){
    axios.get('/api/advice')
    .then(response => {
      console.log(response)
      this.setState( () => ({advice: response.data}))
    })
    .catch(error => {
      console.log(error)
    })
  }
  updateAdvice(adviceObj){
    this.setState({adviceObj})
  }

  render() {
    console.log(this.state.adviceObj)
    return (
      <div className="App">
        <Header />
          <div className="mid">
            <div>
              <SearchBar updateAdvice = {this.updateAdvice}/>
              
            </div>
                <div className="advice-display">
              <AdviceDisplay adviceObj={this.state.adviceObj}/>
              </div>
            <div>

            </div>
            <div>
              <TypeAdviceHere />
            </div>
          </div>
        {/* <Advice advice = {this.state.advice}/> */}
        <DisplayAllAdvice />
      </div>
    );
  }
}

export default App;

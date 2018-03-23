import React, { Component } from 'react';
import './App.css';
import Advice from './Components/Advice'
import SearchBar from './Components/SearchBar'
import Header from './Components/Header'
import axios from 'axios'
import InputSubmit from './Components/InputSubmit'


class App extends Component {
  constructor(){
    super()

    this.state = {
      myAdvice: [
        {
        category: "Career",
        title: "Have you seen Titanic?",
        advice: "The ship is sinking. Find a life preserver and jump!"
      },
      {
        category: "Career",
        title: "Should I stay or should I go?",
        advice: "Should I Stay or Should I Go, is a song by the English punk rock band the Clash. It was written in 1981 and featured Mick Jones on lead vocals. Go listen Now!"
      },
      {
        category: "Relationship",
        title: "New Friends",
        advice: "Look for Jack and Jim, they're sure to lend a hand"
      },
      {
        category: "Relationship",
        title: "In love",
        advice: "She loves you like a fat kid loves cake."
      },
      {
        category: "Roullete",
        title: "Not really",
        advice: "Finding someone who cares will serve you well"
      },
      {
        category: "Roullete",
        title: "In love",
        advice: "Dance like no one is watching. Because they're not. They're checking their phones"
      },
      {
        category: "Roullete",
        title: "Selfie",
        advice: "You may be the ugly one if you get handed the camera everytime there is a group photo"
      },
      {
        category: "Roullete",
        title: "Waffles",
        advice: "Yes, waffles are pancakes with abs. So yeah, eat up!"
      },
      
    ]}
  }
  componentDidMount(){
    axios.get('/api/test')
    .then(response => {
      console.log(response)
      this.setState( () => ({myAdvice: response.data}))
    })
    .catch(error => {
      console.log(error)
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
          <div className="mid">
            <div>
              <SearchBar />
              <InputSubmit />
            </div>
          </div>
        <Advice />
      </div>
    );
  }
}

export default App;

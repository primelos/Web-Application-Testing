import React, { Component } from 'react';
import DashBoard from './components/DashBoard'
import Display from './components/Display'
import './App.css';



class App extends Component {
  constructor(){
    super()
    this.state = {
      strikes: 0,
      balls: 0
    }
  }

  reset = () => {
    this.setState({
    strikes: 0,
    balls: 0
  })
  }
  componentDidUpdate = () => {
    if (this.state.strikes === 3 || this.state.balls === 4){
      this.reset()
    }
  }

  addStrikes = () => this.setState({strikes: this.state.strikes + 1})
  addBalls = () => this.setState({balls: this.state.balls +1})
  addHit = () => this.reset()
  addFouls = () => this.state.strikes < 2 ? this.setState({strikes: this.state.strikes + 1}) : null

  render() {
  return (
    <div>
      <h1>BaseBall Score Board</h1>
      <Display {...this.state} />
      <DashBoard addStrikes={this.addStrikes}  addBalls={this.addBalls} addHit={this.addHit} addFouls={this.addFouls} />
   </div> 
   
  );
  }
}

export default App;

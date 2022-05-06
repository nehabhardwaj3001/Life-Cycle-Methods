import React, { Component } from 'react';
import "./App.css"

export default class App extends Component {

  constructor(props) {
    super(props)
    console.warn("constructor called")
  
    this.state = {
       name : "Neha",
       number : 0
    }
  }

  componentDidMount() {
    console.warn("componentDidMount called")
  }

  componentDidUpdate( preProps, preState, snapshot ) {
    console.warn("componentDidUpdate" , preState.number, this.state.number)
    if(preState.number === this.state.number){
      alert("number is not updating, only name updated...")
    } if(this.state.number <= 10 ){
      this.setState({
        number : this.state.number + 1
      })
    }
  }
   
  nameHandler() {
    this.setState({
      name : "sourav"
    })
  }

  numberHandler() { 
    this.setState({
      number : this.state.number + 1
    })
  }

  render() {
    // console.warn("render called")
    return (
      <div className='App'>
        <h1>Hello {this.state.name}</h1>
        <button onClick={this.nameHandler.bind(this)}> Click </button>
        <h1>{this.state.number}</h1>
        <button onClick={() => this.numberHandler()}>change</button>
      </div>
    )
  }
}

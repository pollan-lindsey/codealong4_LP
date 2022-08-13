
import React, { Component } from 'react'

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      fruit: ''
    }
  }

  handleChange = (event) => {
    //when user enters text, change the state
    this.setState({value: event.target.value});
  }

  handleFruitChange = (event) => {
    //when user enters text, change the state
    this.setState({fruit: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert('Submitted');
  }
  
  render() {
    return (
      <>
      <h1>Welcome, {this.state.value}!</h1>
      <h2>Your favorite fruit is: {thius.state.fruit}</h2>
      <form onSubmit={this.handleSubmit}>
        <label>Name:
          <input type={'text'} value={this.state.value} onChange={this.handleChange} />
        </label><br/><br/>
        
        <label>Pick your favorite fruit:
        <select value={this.state.fruit} onChange={this.handleFruit}>
          <option value='grapefruit'>Grapefruit</option>
          <option value='lime'>Lime</option>
          <option value='coconut'>Coconut</option>
          <option value='mango'>Mango</option>
        </select>
        </label>

        <input type={'submit'} value={'Submit'}/>
        
      </form>
      </>
    )
  }
}
//change below the render inside return to what's on github
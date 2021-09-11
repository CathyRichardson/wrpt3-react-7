import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userInput: "",
      chars: []
    }
  }

  handleInput = (e) => this.setState({
    userInput: e.target.value
  })

  handleSearch = async () => {
    const { data } = await axios.get(`https://swapi.dev/api/people/?search=${this.state.userInput || 'r2'}`);
    this.setState({
      chars: data.results
    })
  }

  componentDidMount(){
    this.handleSearch();
  }

  render(){
    const { chars } = this.state;
    return (
      <div className="App">
       <input onChange={this.handleInput}></input>
       <button onClick={this.handleSearch}>Search</button>
       <ul>
         {chars.map(({ name }) => {
           return (
             <li>{name}</li>
           )
         })}
       </ul>
      </div>
    );
  }
}

export default App;

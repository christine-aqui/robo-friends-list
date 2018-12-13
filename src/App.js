import React, {Component} from 'react';
import CardList from "./component/CardList";
import SearchBox from "./component/SearchBox";
import { robots } from './robots';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots:robots,
      searchfield: ''
    }
    
  }
  // helper methods
  onSearchChange = (event) =>{
    console.log(event.target.value);
    this.setState({searchfield: event.target.value})

  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (
      <div className='tc'>
      <h1 className='f1' >Robo Friends List</h1>
      <SearchBox  
      searchfield={this.state.searchfield} 
      onSearchChange={this.onSearchChange}/>
      <CardList robots={filteredRobots}/>
      </div>
    )
  }
}

export default App;
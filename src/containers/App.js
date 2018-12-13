import React, {Component} from 'react';
import CardList from "../component/CardList";
import SearchBox from "../component/SearchBox";
import Scroll from "../component/Scroll";
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // convert res to json
    .then(users => this.setState({robots: users}))
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
    if(this.state.robots.length === 0 ){
      return <h1>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1' >Robo Friends List</h1>
          <SearchBox  
          searchfield={this.state.searchfield} 
          onSearchChange={this.onSearchChange}/>
          <Scroll >
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      )
    }

  }
}

export default App;
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
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
     return (!robots.length) ? <h1>Loading</h1> : 
       (
        <div className='tc'>
          <h1 className='f1' >Robo Friends List</h1>
          <SearchBox  
          searchfield={searchfield} 
          onSearchChange={this.onSearchChange}/>
          <Scroll >
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      )
    

  }
}

export default App;
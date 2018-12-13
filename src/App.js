import React, {Component} from 'react';
import CardList from "./component/CardList";
import SearchBox from "./component/SearchBox";
import { robots } from './robots';

class App extends Component {
  state = {
    robots:robots,
    searchfield: ''
  }
  render() {
    return (
      <div className='tc'>
      <h1>Robo Friends List</h1>
      <SearchBox />
      <CardList robots={this.state.robots}/>
      </div>
    )
  }
}

export default App;
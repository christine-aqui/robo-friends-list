import React, { Component } from "react";
import CardList from "../component/CardList";
import SearchBox from "../component/SearchBox";
import Scroll from "../component/Scroll";
import ErrorBoundry from "../component/ErrorBoundry";
import "./App.css";

import { setSearchField } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  // recieve a state and return an object
  return {
    searchField: state.searchField
  };
};

const mapDispatchToProps = dispatch => {
  // gets the dispatch (triggers the action)
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json()) // convert res to json
      .then(users => this.setState({ robots: users }));
  }

  // helper methods
  // onSearchChange = event => {
  //   console.log(event.target.value);
  //   this.setState({ searchfield: event.target.value });
  // };

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Robo Friends List</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

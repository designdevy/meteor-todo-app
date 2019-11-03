import React, { Component } from "react";
import { Route } from "react-router-dom";
import TaskList from "./TaskList";
import Mock from './Mock'
import Mock2 from './Mock2'
import Mock3 from './Mock3'

class App extends Component {
  render() {
    return (
      <main>
        <Route exact path="/" component={Mock} />
        <Route exact path="/mock2" component={Mock2} />
        <Route exact path="/mock3" component={Mock3} />
        <Route exact path="/todo" component={TaskList} />
      </main>
    );
  }
}

export default App;

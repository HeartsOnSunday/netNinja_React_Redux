import React, { Component } from "react";
import Ninjas from "./Ninjas";
class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Go screw yourself!</p>
        <Ninjas name="Ryu" age="25" belt="Black" />
        <Ninjas name="loser" age="33" belt="None" />
      </div>
    );
  }
}

export default App;

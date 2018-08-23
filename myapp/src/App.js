import React, { Component } from "react";

class Ninjas extends Component {
  render(){

  
  state = {
    ninjas : [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 },
    ]
  }
  render() {
    const { ninjas } = this.props;
    const ninjaList = ninjas.map(ninja => {
      return (
        <div className="ninja">
        <div>Name: { name }</div>
        <div>Age: { age }</div>
        <div>Belt: { belt }</div>
      </div>
      )
    })
    return (
      
    );
  }
}

export default App;

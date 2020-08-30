import React from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";

import food from './assets/food.png';

const monday = mondaySdk();

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // TODO: set up event listeners
  }

  render() {
    return <div className="App">
      
      </div>;
  }
}

export default App;

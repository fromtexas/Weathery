import React, { Component } from "react";
import SearchBar from "./SearchBar";
import WeatherListContainer from "./WeatherListContainer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <WeatherListContainer />
      </div>
    );
  }
}

export default App;

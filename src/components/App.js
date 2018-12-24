import React from "react";
import SearchBar from "./SearchBar";
import WeatherListContainer from "./WeatherListContainer";

function App() {
  return (
    <div className="container">
      <SearchBar />
      <WeatherListContainer />
    </div>
  );
}

export default App;

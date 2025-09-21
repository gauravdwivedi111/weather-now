import React from "react";
import Weather from "./components/Weather";
import CustomCursor from "./components/CustomCursor";
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Weather />
    </div>
  );
}

export default App;




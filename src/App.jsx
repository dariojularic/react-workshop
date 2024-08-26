import React from "react";
import "./App.css";
import Employee from "./Employee";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Directory</h1>
        <Employee/>
        <Employee/>
        <Employee/>
        <Employee/>
      </header>
    </div>
  )
}

export default App;

import React from "react";
import "./App.css";
import Employee from "./Employee";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Directory</h1>
        <Employee firstName="Jack" lastName="Smith" />
        <Employee firstName="Jonny" lastName="D" />
        <Employee firstName="Rio" lastName="A"/>
        <Employee firstName="Marco" lastName="B"/>
      </header>
    </div>
  )
}

export default App;

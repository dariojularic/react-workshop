import React, { useState } from "react";
import Counter from "./Counter";
import "./App.css";
import TodoList from "./TodoList";

function App() {
 const [showCounter, setShowCounter] = useState(false);
 return (
  // <div className="App">
  //   <h1>Our App</h1>
  //   <button onClick={() => setShowCounter(!showCounter)}>
  //     {showCounter ? "Hide Counter" : "Show Counter"}
  //   </button>
  //   {showCounter && <Counter />}
  // </div>
  <TodoList/>
 )
}

export default App;

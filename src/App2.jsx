import React from "react";
import "./App.css";
import Employee from "./Employee";

const employeeInfo = [
  {
    firstName: "Jack",
    lastName: "Smith",
    age: "23",
    employeeId: 1
  },
  {
    firstName: "Jonny",
    lastName: "F",
    age: "22",
    employeeId: 2
  },
  {
    firstName: "Mick",
    lastName: "A",
    age: "32",
    employeeId: 3
  },
  {
    firstName: "Top",
    lastName: "G",
    age: "45",
    employeeId: 4
  }
];

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Directory</h1>
        {employeeInfo.map(employee => {
          // const {firstName, lastName, age} = employee;
          return (
            <Employee key={employee.employeeId} {...employee} />
          )
        })}

        {/* <Employee firstName="Jack" lastName="Smith" age="26"/>
        <Employee firstName="Jonny" lastName="D" age="36"/>
        <Employee firstName="Rio" lastName="A" age="36"/>
        <Employee firstName="Marco" lastName="B" age="26"/> */}
      </header>
    </div>
  )
}

export default App;

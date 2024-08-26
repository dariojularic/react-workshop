import React from "react";

const Employee = (props) => {
  console.log(props)
  return (
    <h1>Employee Name: {props.firstName}</h1>
  )
}

export default Employee

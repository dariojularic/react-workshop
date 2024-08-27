import React from "react";

const Employee = (props) => {
  console.log(props)
  const {firstName, lastName, age} = props
  return (
    <h1>Employee Name: {firstName} {lastName} who is age {age}</h1>
  )
}

export default Employee

import React, { useEffect, useState } from "react"


const Counter = () => {
  const [count, setCount] =  useState(0);
  const [count2, setCount2] =  useState(0);

  // componentDidMount
  // useEffect(() => {
  //   console.log("The use effect ran")
  // }, [])

  // ComponentDidUpdate
  useEffect(() => {
    console.log("The use effect ran")
  }, [count, count2])

  // componentDWillUnmount
  useEffect(() => {
    console.log(`The count has updated to ${count}`);
    return () => {
      console.log(`we are in the cleanup - the count is ${count}`)
    }
  }, [count]);

  return (
    <div>
      <h6> Counter</h6>
      <p>The count is: {count} </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount2(count2 + 1)}>Increment2</button>
      {/* <button onClick={() => setCount(count - 1)}>Decrement</button> */}
    </div>
  )
}

export default Counter

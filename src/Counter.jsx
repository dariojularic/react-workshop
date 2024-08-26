import React from "react"

const Counter = () => {
  const count = 0;

  return (
    <React.Fragment>
      <p>The count is: {count} </p>
      <button>Increment</button>
      <button>Decrement</button>
    </React.Fragment>
  )
}

export default Counter

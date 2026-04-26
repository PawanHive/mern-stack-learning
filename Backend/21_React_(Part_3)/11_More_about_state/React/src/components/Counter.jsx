import { useState } from "react";

function init() {
  console.log("init was executed");
  return Math.random();
}

function Counter() {
  let [count, setCount] = useState(init); // this is good practice ( passes function reference, runs only once (lazy initialization)), useState automatically execute this function
  // let [count, setCount] = useState(init()); // this is bad practice (calls function immediately on every render (bad for performance)) 

  function incCount() { 
    setCount((currCount) => {
      return currCount + 1;
    })
  }

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  )
}

export default Counter;
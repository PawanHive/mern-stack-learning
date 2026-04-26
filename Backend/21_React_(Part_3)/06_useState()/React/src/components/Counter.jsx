import { useState } from "react";

function Counter() {
  // let [stateVariable, setStateVariable] = useState(10);
  let [count, setCount] = useState(0);

  // console.log(arr);
  
  function handleclick() {
    setCount(count+1);
    console.log(count);
  }

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={handleclick}>Increase Count</button>
    </div>
  )
}

export default Counter;
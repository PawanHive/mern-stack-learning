import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  console.log("Component is rendered!");
  console.log(`count = ${count}`); //after re-render // output = 1

  function incCount() { // increase count
    setCount(count+1);
    console.log(`inside incCount, count = ${count}`); // before re-render  // output = 0   
  }

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  )
}

export default Counter;
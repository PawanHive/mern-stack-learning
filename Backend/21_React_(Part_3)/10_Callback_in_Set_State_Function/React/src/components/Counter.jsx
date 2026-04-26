import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function incCount() { // increase count
    // ---------------------------- FIRST WAY: of Callback in 'setState' Functions ----------------
    // // what if we write same statement for 4 time:-  nothing happen (feels like only one executed)
    // setCount(count+1); // direct state update
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);

    // ----------------------- SECOND WAY: of Callback in 'setState' Functions (want to increase counter by 2 everytime) ------------------
    setCount((currCount) => { // now it behave like async function and below setCount function will also execute
      return currCount + 1;
    })
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
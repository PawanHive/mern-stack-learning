import {useState, useEffect} from "react"

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  let incCountx = () => {
    setCountx(currCount => currCount +1);
  }

  let incCounty = () => {
    setCounty(currCount => currCount +1);
  }

  // // 1st purpose of adding DEPENDENCIES to 'useEffect' ( IT WILL TRIGGER ON EVERY RE-RENDER)
  // useEffect(function printSomething() { // syntax: useEffect(setup, dependencies?) ... here 'setup' is function and 'dependencies' means "state variable"
  //   console.log("this is a side effect")
  // }, [countx]) // here '[countx]' is dependencies we added now 'useEffect' will only trigger for 'countx' state variable not for 'county'


  // 2st purpose of adding DEPENDENCIES to 'useEffect' ( IT WILL TRIGGER ONLY FIRST RENDER, NOT ON EVERY RE-RENDER)
  useEffect(function printSomething() { 
    console.log("this is a side effect")
  }, []) // here if we pass only empty arry '[]' as dependencies then 'useEffect' will trigger only 1st time of render (it won't trigger on every re-render)


  return (
    <div>
      <h3>countx = {countx}</h3>
      <button onClick={incCountx}>+1</button>

      <h3>county = {county}</h3>
      <button onClick={incCounty}>+1</button>
    </div>
  )
}
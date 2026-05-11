import { useState } from "react"

export default function ArraynState() {
  let [fruits, setFruits] = useState(["apple", "banana", "Mango"])

  // return (
  //   <div>
  //     <h3>This is basic example of passing ARRAY in state</h3>
  //     <h4>List of Fruits: {fruits}</h4> {/* but the problem with direct render is it will print array like "applebananamango" .... no-space between them */}
  //   </div>
  // )

  function addFruits() {
    setFruits([...fruits, "Orange"]) // use spread operator to create new array because modifying the existing array can't read by react
  }

  return (
    <div>
      <h3>This is basic example of passing ARRAY in state</h3>
      <h4>
        {
          fruits.map((fruit) => {
            return <h4>{fruit}</h4>
          })
        }
      </h4>

      <button onClick={addFruits}>Add Fruits</button>
    </div>
  )

}
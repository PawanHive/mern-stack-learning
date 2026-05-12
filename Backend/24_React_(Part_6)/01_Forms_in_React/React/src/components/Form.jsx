import { useState } from "react"


export default function Form() {
  let [fullName, setFullName] = useState("shradha")

  let handleNameChange = (event) => {
    setFullName(event.target.value)
    // console.log(event.target.value) // remember this 
  }
  return (
    <form action="">
      <input type="text" placeholder="fullname" value={fullName} onChange={handleNameChange}/> {/*as we add 'value' attribute and given state variable as a value, then now form input is connected to react state variable */}
      <button>Submit</button>
    </form>
  )
}
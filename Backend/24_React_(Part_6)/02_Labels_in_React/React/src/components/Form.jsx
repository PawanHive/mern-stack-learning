import { useState } from "react"


export default function Form() {
  let [fullName, setFullName] = useState("")

  let handleNameChange = (event) => {
    setFullName(event.target.value)
    // console.log(event.target.value) // remember this 
  }
  return (
    <form action="">
      <label htmlFor="username">Username: </label>
      <br />
      <input type="text" placeholder="fullname" value={fullName} onChange={handleNameChange} id="username"/> {/*as we add 'value' attribute and given state variable as a value, then now form input is connected to react state variable */}
      <button>Submit</button>
    </form>
  )
}
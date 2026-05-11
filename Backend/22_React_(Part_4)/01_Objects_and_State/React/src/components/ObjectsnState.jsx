import { useState } from "react"

export default function ObjectnState() {

  let [person, setPerson] = useState({name: "Pawan", age: 20}) // we passed OBJECT in useState

  // function increaseAge() {
  //   person.age = person.age + 1  // but this is wrong practice because
  //   console.log(person.age)
  //   setPerson({...person})
  // }

  // good practice
  function increaseAge() {
    setPerson({
      ...person,
      age: person.age + 1
    })
  }

  return (
    <div>
      <h3>This is basic example of passing OBJECT in state</h3>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>

      <button onClick={increaseAge}>Update Age</button>
    </div>
  )
}
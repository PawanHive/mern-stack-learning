import { useState } from "react"

export default function AddForm() {
  const [task, setTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(task)

  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input onChange={(e) => setTask(e.target.value)} type="text" />
        <button>Add Task</button>
      </form>
    </>
  )
}
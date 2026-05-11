import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4()} ]);
    setNewTodo(""); // this will make input empty after clicking on add task
    // console.log("we have to add new task to do")
  };

  // update NEW TODO
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
    // console.log(event.target.value)
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />

      <h4>Todo List</h4>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.task}</li>;
        })}
      </ul>
    </div>
  );
}

/*

This CODE can also written without using RETURN statement

      <ul>
        {
          todos.map((todo) => {
            return <li>{todo}</li>
          }) 
        }
      </ul>

This is without RETURN statement
      <ul>
        {
          todos.map((todo) => (
            <li>{todo}</li>
          )) 
        }
      </ul>
*/

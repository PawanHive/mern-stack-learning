import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo(""); // this will make input empty after clicking on add task
    // console.log("we have to add new task to do")
  };

  // update NEW TODO
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
    // console.log(event.target.value)
  };

  // Delete Element of array
  let deleteTodo = (id) => {
    // (it will take id as argument and find what exactly have to delete)
    // mostly filter() method used to delete element from array in react and this method always return new of copy of array
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));

    // let copy = todos.filter((todo) => todo.id != id)
    // console.log(copy)
    // console.log(id)
    // console.log("Task to be deleted")
  };

  // Update all element of Array to Uppercase
  let upperCaseAll = () => {
    setTodos((prevTodos) =>       // arrow => without { } means implicit return
      prevTodos.map((todo) => {   // so this whole map is automatically returned
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })        //  closing map
    );           //  closing setTodos
  };

  // // Update only one element of array 
  let upperCaseOne = (id) => {
    setTodos((prevTodos) =>      
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        } 
      })       
    );
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
        {/* always map are used to render element from array */}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.task}</span>
              &nbsp; &nbsp;
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              &nbsp; &nbsp;
              <button onClick={() => upperCaseOne(todo.id)}>UpperCase One</button>
            </li>
          );
        })}
      </ul>

      <br />
      <button onClick={upperCaseAll}>UpperCase All</button>
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

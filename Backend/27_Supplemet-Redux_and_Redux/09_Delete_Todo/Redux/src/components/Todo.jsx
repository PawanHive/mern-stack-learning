import { useSelector } from "react-redux"
import AddForm from "./AddForm";
import { useDispatch } from "react-redux"
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  const clickDone = (id) => {
    console.log("Done", id)
    dispatch(markAsDone(id))
  }
  const clickHandler = (id) => {
    console.log("delete", id)
    dispatch(deleteTodo(id))
  }
  return (
    <>
      <h3>Todo List App</h3>
      <AddForm />
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>
              <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
                {todo.task}
              </span>
              <button onClick={() => clickDone(todo.id)}>Done</button>
              <button onClick={() => clickHandler(todo.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </>
  )
}

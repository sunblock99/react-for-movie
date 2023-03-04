import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(todo === ""){
      return;
    }
    setTodo("");
    setTodos((currentArray) => [todo, ...currentArray]);
  } 
  console.log(todos);
  return (
  <div>
    <h1>나의 todo 수는  : ({todos.length})</h1>
    <form onSubmit={onSubmit}>
    <input onChange={onChange} value={todo} type="text" placeholder="Write your to do...." />
    <button>Add todo</button>
    </form>
  </div>);
  
}

export default App;
 
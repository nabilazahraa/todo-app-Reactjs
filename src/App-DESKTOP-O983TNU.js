import "./App.css";
import React, { useState, useEffect } from "react";
import TodoListItem from "./Todo";
import "./stylesheet.css";
import firebase from "firebase";
import db from "./firebase";
import { Button } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: input,
    });

    setInput("");
  }

  return (
    <div className="App">
      <h1 className="heading">T O D O</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="todo"
          name="text"
          placeholder="Create a new todo..."
          autoComplete="off"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button className="addtodo" type="submit">
          ADD TODO
        </button>
      </form>
      <div className="bg">
        {todos.map((todo) => (
          <TodoListItem
            todo={todo.todo}
            inprogress={todo.inprogress}
            id={todo.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

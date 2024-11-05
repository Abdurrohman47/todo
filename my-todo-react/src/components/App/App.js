import { useState } from "react";
import "./App.css";
import Form from "../Form/Form";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", completed: false, isFavorite: false },
    { id: 2, title: "Build a Todo App", completed: false, isFavorite: false },
    { id: 3, title: "Master JavaScript", completed: false, isFavorite: false },
  ]);

  const putTodo = (value) => {
    if (value) {
      setTodos([...todos, { id: Date.now(), title: value, completed: false }]);
    } else {
      alert("Введите текст!");
    }
  };

  const changeTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  const toggleFavorite = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isFavorite: !todo.isFavorite } : todo
      )
    );
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleUpdateTodo = (id, updatedTitle) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          title: updatedTitle,
        };
      })
    );
  };

  const favorites = todos.filter((item) => item.isFavorite);

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="title">Todo</h1>
        <Form putTodo={putTodo} />
        <ul className="todos">
          {todos.map((todo) => {
            return (
              <Todo
                todo={todo}
                update={handleUpdateTodo}
                remove={removeTodo}
                add={changeTodo}
                toggleFavorite={toggleFavorite}
                key={todo.id}
              />
            );
          })}
        </ul>
        <div className="info">
          <span>All Todos: {todos.length}</span>
          <span>Favorites: {favorites.length} </span>
        </div>
      </div>
    </div>
  );
}

export default App;

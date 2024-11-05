import React from "react";
import { useState } from "react";

const Todo = ({ todo, update, remove, toggleFavorite, add }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const toogleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const handleUpdate = () => {
    update(todo.id, editedTitle);
    toogleEditing();
  };

  return (
    <li
      className={todo.completed ? "todo done" : "todo"}
      key={todo.id}
      onClick={() => add(todo.id)}
    >
      {isEditing ? (
        <div>
          <form onSubmit={handleUpdate}>
            <input
              onChange={(e) => setEditedTitle(e.target.value)}
              value={editedTitle}
              type="text"
            />
            <button>Save</button>
          </form>
        </div>
      ) : (
        <span>{todo.title}</span>
      )}
      <div>
        <img
          src="./pencil.svg"
          alt=""
          style={{ width: "25px", marginRight: "10px" }}
          onClick={toogleEditing}
        />
        <img
          src={todo.isFavorite ? "./favourite-filled.svg" : "./bookmark.svg"}
          alt="favorites"
          className="favorites"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(todo.id);
          }}
        />
        <img
          src="./delete.png"
          alt="delete"
          className="delete"
          onClick={(e) => {
            e.stopPropagation();
            remove(todo.id);
          }}
        />
      </div>
    </li>
  );
};

export default Todo;

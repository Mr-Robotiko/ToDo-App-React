import React from "react";
import { ITodo } from "../models/TodoTemplate";
import "../stylesheets/Todo.css";

function ToDo({
  toDoItem,
  deleteTodo,
  finishTodo,
  editMode,
}: {
  toDoItem: ITodo;
  deleteTodo: (id: number) => void;
  finishTodo: (todo: ITodo) => void;
  editMode: (todo: ITodo) => void;
}) {
  return (
    <div className="list-todo">
      <div className={`name ${toDoItem.checked ? "strikeout-text" : ""}`}>
        <input
          className="check-box"
          type="checkbox"
          onChange={() => finishTodo(toDoItem)}
          checked={toDoItem.checked}
        ></input>
        {toDoItem.name.toUpperCase()}
      </div>
      <div className="date">{toDoItem.date}</div>
      <div className="options">
        <button
          className="delete-button"
          onClick={() => deleteTodo(toDoItem.id)}
        >
          🗑
        </button>
        <button className="edit-button" onClick={() => editMode(toDoItem)}>
        ✎
        </button>
      </div>
    </div>
  );
}

export default ToDo;

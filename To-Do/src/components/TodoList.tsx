import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import { ITodo } from "../models/TodoTemplate";
import ToDoForm from "./TodoForm";
import "../stylesheets/TodoList.css";

const ToDoList = () => {

  const storedTodoList = localStorage.getItem("todos");
  // Handle current Todos
  const [toDoList, setToDoList] = useState<ITodo[]>(
    storedTodoList ? JSON.parse(storedTodoList) : []
  );

  const checkedTodoList = toDoList.filter(todo => todo.checked)
  const uncheckedTodoList = toDoList.filter(todo => !todo.checked)
 //const isEditMode = toDoList.filter(todo => todo.isEditMode)

  // Checkbox handling
  const finishTodo = (todo: ITodo) => {
    todo.checked = !todo.checked;
    setToDoList([...toDoList]);
    localStorage.setItem("todos", JSON.stringify(toDoList));
  };

  // Editmode handling
  const activateEditMode = (todo: ITodo) =>{
    todo.isEditMode = true;
    setToDoList([...toDoList]);
    debugger
  };

  // Delete button handling
  const deleteTodo = (id: number) => {
    const newTodo = toDoList.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(newTodo));
    setToDoList(newTodo);
  };

  //
  const handleOnEdit = (todoItem : ITodo) => {
    const foundTodoIndex = toDoList.findIndex((todo) => todo.id === todoItem.id);
    if(foundTodoIndex !== -1){
      toDoList[foundTodoIndex] = todoItem;
    }
    localStorage.setItem("todos", JSON.stringify(toDoList))
    setToDoList([...toDoList]);
  }

  // Add Todo handling
  const handleOnAdd = (todo: ITodo) => {
    const newToDoList = [todo, ...toDoList];
    setToDoList(newToDoList);
    localStorage.setItem("todos", JSON.stringify(newToDoList));
  };

  return (
    <div>
      <h2 className="headline">ToDo List</h2>
      <ToDoForm handleTodo={handleOnAdd}></ToDoForm>
      <ul className="list">
        {uncheckedTodoList.map((toDoItem: ITodo) => {
          if(toDoItem.isEditMode){
            return <ToDoForm 
            key={toDoItem.id}
            handleTodo={handleOnEdit}
            todoItem={toDoItem}/>
          }
          else{          
          return(
          <Todo
            finishTodo={finishTodo}
            deleteTodo={deleteTodo}
            key={toDoItem.id}
            toDoItem={toDoItem}
            editMode={activateEditMode}
          />
        )}})}
      </ul>
      <hr/>
      <ul className="list">
      {checkedTodoList.map((toDoItem: ITodo) => (
          <Todo
            finishTodo={finishTodo}
            deleteTodo={deleteTodo}
            key={toDoItem.id}
            toDoItem={toDoItem}
            editMode={activateEditMode}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;

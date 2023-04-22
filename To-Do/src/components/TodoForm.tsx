import React, { useState } from "react";
import { ITodo } from "../models/TodoTemplate";
import "../stylesheets/TodoForm.css";
import { useForm, SubmitHandler } from "react-hook-form";

const ToDoForm = ({
  handleTodo,
  todoItem,
}: {
  handleTodo: (todo: ITodo) => void;
  todoItem?: ITodo;
}) => {

  // useForm for feedback
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      todoName: todoItem ? todoItem.name : "",
    },
  });

  // Handle edit todo
  const onEdit: SubmitHandler<{ todoName: string }> = (data) => {
    const editedTodo = {
      ...todoItem,
      name: data.todoName,
      isEditMode: false,
    } as ITodo;
    handleTodo(editedTodo);
  };

  // Adds a Todo
  const onAdd: SubmitHandler<{ todoName: string }> = (data) => {
    const todo = {
      id: new Date().getTime(),
      date: new Date().toLocaleDateString(),
      name: data.todoName,
      checked: false,
      isEditMode: false,
    };
    reset({
      "todoName" : ""
    })
    //Add Todo
    handleTodo(todo);
  };

  // Returns the layout of the form field
  return (
    <div className="form-container">
      <form onSubmit={todoItem ? 
        handleSubmit(onEdit) : handleSubmit(onAdd) }>
        <div className="form">
          <input
            className="textfield"
            {...register("todoName", { required: true })}
          />
          <button className="button" type="submit">
            +
          </button>
        </div>
        {errors.todoName && (
          <label className="error">This field is required</label>
        )}
      </form>
    </div>
  );
};

export default ToDoForm;

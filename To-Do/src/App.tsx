import React, { Component } from "react";
import ToDoList from "./components/TodoList";
import '../src/stylesheets/App.css';

function App() {
  return (
    <>
      <ToDoList></ToDoList>
    </>
  );
}

export default App;




//  const todos: ITodo[] = [
//    {
//      name: "Task 1",
//      //date: "test Date",
//      id: new Date().getMilliseconds(),
//    },
//  ];

//  const addTodo = (event: React.SyntheticEvent<HTMLFormElement>) => {
//    console.log("add Todo")
//    event.preventDefault();
//  };

//  function handleSubmit(event: any) {
//    event.preventDefault();

//    const form = event.target;
//    const formData = new FormData(form);

//  }

//<TodoForm onAdd={this.addTodo} onChange={this.handleTodoChange} ></TodoForm>

// import React from "react";
// import "./App.css";
// import { TodoList } from "./components/TodoList";
// import TodoForm from "./components/TodoForm";
// import { ITodo } from "./models/Todo";

// import { NewTaskForm } from "./components/TodoForm";
// import { TasksList } from "./components/TodoList";

// interface State {
//   newTodo: ITodo;
//   todos: ITodo[];
// }

// class App extends Component<{}, State> {
//   state = {
//     newTodo: {
//       id: 1,
//       name: ""
//     },
//     todos: []
//   };

// render() {
//   return (
//     <div>
//       <h2>Hello React TS!</h2>
//       <NewTaskForm
//         todo={this.state.newTodo}
//         onAdd={this.addTodo}
//         onChange={this.handleTodoChange}
//       />
//       <TasksList todos={this.state.todos} onDelete={this.deleteTodo} />
//     </div>
//   );
// }

//   private addTodo = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     this.setState(previousState => ({
//       newTodo: {
//         id: previousState.newTodo.id + 1,
//         name: ""
//       },
//       todos: [...previousState.todos, previousState.newTodo]
//     }));
//   };

//   private handleTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     this.setState({
//       newTodo: {
//         ...this.state.newTodo,
//         name: event.target.value
//       }
//     });
//   };

//   private deleteTodo = (taskToDelete: ITodo) => {
//     this.setState(previousState => ({
//       todos: [
//         ...previousState.todos.filter(task => task.id !== taskToDelete.id)
//       ]
//     }));
//   };
// }
// export default App;

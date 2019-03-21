import React, { Component } from "react";
import ToDoList from './todoList.js';
import AddToDo from './AddToDo.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World",
      todos: ["I'm todo1", "I'm todo2", "I'm todo3", "I'm todo4"]
    };
  }

  addTodoToState(e, item){
    e.preventDefault();
    this.setState({todos: this.state.todos.concat([item])});
  }  

  removeTodo(e, key){
    e.preventDefault();
    let newToDoList = this.state.todos.slice();
    newToDoList.splice(key, key+1);
    this.setState({todos: newToDoList})
  }

  updateTodo(e, key){
    e.preventDefault();
      let result = prompt('HEY!');
      let newToDoList = this.state.todos.slice();
      newToDoList.splice(key, key+1, result);
      this.setState({todos: newToDoList});
  }

  render() {
    return (
      <div>
        <AddToDo clickMethod={this.addTodoToState.bind(this)}/>
        <ToDoList todos={this.state.todos} removeTodo={this.removeTodo.bind(this)} updateTodo={this.updateTodo.bind(this)}/>
      </div>
    );
  }
}

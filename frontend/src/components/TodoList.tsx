"use client"

import { getAllTodo, addTodo, removeTodo, updateTodo, toggleTodo } from "@/redux/features/todo-slice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";

class TodoList extends Component {
  todoList = () => {
    useSelector((state: RootState) => state.todoReducer.list)
  };
  dispatch = () => {
    useDispatch<AppDispatch>()
  };
  state = {
    todoList: []
  };

  // Fetch data from backend
  async componentDidMount() {
    try {
      const res = await fetch('/api/');
      const todoList = await res.json();
      this.setState({
        todoList
      });
    } catch(e) {
      console.log("error: ", e);
    }
  }

  handleSubmit = () => {
    this.dispatch(
      addTodo({
        id: Date.now(),
        created: Date.now(),
        updated: Date.now(),
        assigned_to: "",
        is_complete: false,
        task: "",
      })
    );
    setTodo("");
  };

  handleDelete = (id: number) => {
    this.dispatch(removeTodo(id));
  };

  handleUpdate = (id: number) => {
    this.dispatch(updateTodo(id));
  };

  handleToggle = (id: number) => {
    this.dispatch(toggleTodo(id));
  };

  render() {
    return (
      <div>
        <input 
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button onClick={this.handleSubmit}>Add</button>
        {this.state.todoList.map((todo) => {
          return (
            <div key={todo.id} className="flex">
              <input
                type="checkbox"
                checked={todo.is_complete}
                onChange={() => this.handleToggle(todo.id)}
              />  
              {todo.assigned_to}
              {todo.task}
  
              <button onClick={() => this.handleDelete(todo.id)} className="ml-auto">
                🗑️
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TodoList;

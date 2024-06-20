import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  created: string;
  updated: string;
  assigned_to: string;
  task: string;
  is_complete: boolean;
};

type TodoState = {
  list: Todo[];
  user: string;
};

const initialState: TodoState = {
  list: [],
  user: "todo",
};

// Define the async thunk for fetching todo data
export const fetchTodoData = createAsyncThunk('todo/fetchTodoData',
  async () => {
    const resp = await fetch('/');
    const jsonData = await resp.json();
    console.log("fetchTodoData: ", jsonData);
    return jsonData;
  }
);

export const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getAllTodo: (state, action) => {
      fetchTodoData.fulfilled, ()
    },
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.is_complete = !todo.is_complete;
      }
    },
  },
});

export const { getAllTodo, addTodo, removeTodo, updateTodo, toggleTodo } = todo.actions;
export default todo.reducer;
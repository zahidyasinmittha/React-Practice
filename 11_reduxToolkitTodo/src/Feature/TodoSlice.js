import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    saveTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        isEditable: false,
      };
      state.todoList.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    updateTodo: (state, action) => {
      const index = state.todoList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todoList[index].text = action.payload.text;
    },
    updateIsEditable: (state, action) => {
      state.todoList = state.todoList.filter((todo) => {
        if (todo.id === action.payload) {
          todo.isEditable = !todo.isEditable;
        }
        return todo;
      });
    },
  },
});

export const { saveTodo, deleteTodo, updateTodo,updateIsEditable } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;

import { createContext, useContext } from "react";

export const TodosContext = createContext({
  todos: [{ id: 1, text: "Learn React", isCompleted: false }],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, updatedTodo) => {},
  toggleTodo: (id) => {},
});

export const useTodos = () => {
  return useContext(TodosContext);
};

export const TodosProvider = TodosContext.Provider;

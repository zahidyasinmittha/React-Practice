import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, updateTodo, updateIsEditable } from '../Feature/TodoSlice';

function Todo() {
  const [updatedTexts, setUpdatedTexts] = useState({}); // State to hold updated text for each todo item
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoList);

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdateTodo = (id, isEditable) => {
    if (!isEditable) {
      dispatch(updateIsEditable(id));
    } else {
      dispatch(updateIsEditable(id));
      dispatch(updateTodo({
        id: id,
        text: updatedTexts[id], // Use the updated text for this todo item or an empty string if not available
      }));
    }
  };

  const handleInputChange = (id, value) => {
    setUpdatedTexts({
      ...updatedTexts,
      [id]: value, // Update the updated text for this todo item
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Todo List</h1>
      {todos.map((todo) => (
        <div key={todo.id} className="flex justify-between items-center border-b py-2">
          <input
            type="text"
            disabled={!todo.isEditable}
            value={updatedTexts[todo.id] || todo.text}
            onChange={(e) => handleInputChange(todo.id, e.target.value)}
          />
          <button 
            onClick={() => handleUpdateTodo(todo.id, todo.isEditable)}
            className={`px-2 py-1 rounded ${
              todo.isEditable ? 'bg-green-500 hover:bg-green-700' : 'bg-blue-500 hover:bg-blue-700'
            } text-white font-bold`}
          >
            {todo.isEditable ? "Save" : "Update"}
          </button>
          <button
            onClick={() => handleDeleteTodo(todo.id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;

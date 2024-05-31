import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../Feature/TodoSlice'

function Addtodo() {
  const dispatch = useDispatch()  
  const [text, settext] = useState("")
  const addtodo = (e) => {
    e.preventDefault()
    dispatch(saveTodo(text))
    settext("")
  }
  return (
    <div className="flex items-center justify-center mt-4">
      <input 
        type='text' 
        placeholder='Add todo' 
        value={text} 
        onChange={(e)=> settext(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
      />
      <button 
        onClick={addtodo} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add todo
      </button>
    </div>
  )
}

export default Addtodo

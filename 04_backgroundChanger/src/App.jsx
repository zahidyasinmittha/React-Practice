import { useState } from 'react'

function App() {
  const [color, setcolor] = useState('black')
  return (
    <>
      <div className=' m-0 p-0 bg-black h-screen text-white flex justify-center items-end duration-200' 
         style={{backgroundColor: color }}
      >
        <div className='bg-white w-auto mb-10 rounded-3xl p-4'>
          <button onClick={()=> setcolor('red')} className='bg-red-600 p-2 rounded-3xl mx-2 w-20'>red</button>
          <button onClick={()=> setcolor("green")} className='bg-green-700 p-2 rounded-3xl mx-2 w-20'>green</button>
          <button onClick={()=> setcolor("blue") } className='bg-blue-700 p-2 rounded-3xl mx-2 w-20'>blue</button>
          <button onClick={()=> setcolor("gray") } className='bg-gray-500 p-2 rounded-3xl mx-2 w-20'>gray</button>
          <button onClick={()=> setcolor("yellow") } className='bg-yellow-300 p-2 rounded-3xl mx-2 w-20'>yellow</button>
          <button onClick={()=> setcolor("pink") } className='bg-pink-300 p-2 rounded-3xl mx-2 w-20'>pink</button>
          <button onClick={()=> setcolor("purple") } className='bg-purple-700 p-2 rounded-3xl mx-2 w-20'>purple</button>
        </div>
      </div>
    </>
  )
}
export default App

import { useState } from 'react'
import './App.css'
import Myc from './Myc'

function App() {
  const [count, setCount] = useState(5) 
  const [pChange, setPChange] = useState('btn not clicked')
  let increaseVal = () => {
    setCount(count + 1)
    setPChange("Button Clicked")
  }
  let decreaseVal = () =>{
    count >0 ? setCount(count - 1): setCount(0);

  }
  const [first, setfirst] = useState("hy")
  return (
    <>
      <Myc first={setfirst} />
      <h1>hello zahid{count}{first}</h1>
      <h2>counter value: {count}</h2>
      <p>{pChange}{count}</p>
      <button onClick={increaseVal}>increase value{count}</button>
      <button onClick={decreaseVal}>decrease value{count}</button>
    </>
  )
}

export default App

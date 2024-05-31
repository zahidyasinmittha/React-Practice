import { useState } from "react";

function Increament () {
  const [count,setCount] = useState(0);
  function increaseCount(){
    setCount(precount => precount+1);
    setCount(precount => precount+1);
    setCount(precount => precount+1);
  }
  return (
    <div>
      <h1 className="text-center bg-slate-500 ">Counter</h1>
      <p className="text-center bg-slate-500 ">{count}</p>
      <button className="text-center bg-red-500  center w-full" onClick={increaseCount}>Increase</button>
    </div>
  )
}
export default Increament;
//interview question

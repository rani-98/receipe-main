import { useState } from "react";

function counter() {
    let [count, setCounter] = useState(0);

    const increment = () => {
        setCounter(count+1)
        console.log(`the count is now ${count}`);
    }
    const decrement = () => {
        setCounter(count-1)
        console.log(`the count is now ${count}`);
    }
    return(
        <div className="text-center ">
        <h1>Counter</h1>
        <span className="block">{count}</span>
        <button className="mx-2 ," onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        
        </div>
    
    )
    



}
  
export default counter
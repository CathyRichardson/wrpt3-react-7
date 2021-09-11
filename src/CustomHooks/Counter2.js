import React, {useState} from "react";
import useCounter from "./CounterHook";

function Counter2(){
    const [count, increaseCount, decreaseCount, reset] = useCounter();
    
    return (
        <div>
            <h1>{count <= 5 ? count : 5}</h1>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter2;
import React from "react";
import useCounter from './CounterHook';

function Counter(){
    const [count, increaseCount, decreaseCount, reset] = useCounter();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter;
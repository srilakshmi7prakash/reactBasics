import React, { useState } from 'react';
import { ChildState } from './stateChild';


function ParentState() {
    const [count, updateCount] = useState(0);

    const counter = () => {
        updateCount(count + 1);
    }
    const countDown = () => {
        updateCount(count - 1);
    }

    return (
        <div>
            <button onClick={counter}>Click to count</button>
            <button onClick={countDown}>Click to count down</button>
            <ChildState clickcount={count} />
        </div>
    )
}


export { ParentState };
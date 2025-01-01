import React, { useState } from 'react';

function Countercomp() {
    const [current, setCount] = useState(0);
    const increasCount = () => {
        setCount(current + 1);
    }
    return (
        <div>
            <h2>click Below</h2>
            <button onClick={increasCount}>Click</button>
            <div>You clicked {current} times</div>
        </div>
    );
}


export { Countercomp }; 
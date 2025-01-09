import React, { useState } from 'react';
import '../styles/base.css';



function Spinwheel() {
    const [currentdeg, spin] = useState(0);
    const spinRand = () => {
        var num = Math.floor(Math.random() * 360 + currentdeg)
        spin(num)
    }
    return (
        <div>
            <div className="spin-wrap"
                style={{
                    transform: `rotate(${currentdeg}deg)`
                }
                }
            >
                <h3>Generate</h3>
                <p>{currentdeg}</p>
            </div>
            <button onClick={spinRand} className='spin-bt'>Generate random</button>
        </div>
    );
}


export { Spinwheel }; 
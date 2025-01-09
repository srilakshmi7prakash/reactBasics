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
            <div className='spin-wrap'>

                <div className="spin-wheel"
                    style={{
                        transform: `rotate(${currentdeg}deg)`
                    }
                    }
                >
                </div>
                <div className='seperators'
                    style={{
                        transform: `rotate(${currentdeg}deg)`
                    }
                    }
                >
                    <div className='sep'></div>
                    <div className='sep'></div>
                    <div className='sep'></div>
                    <div className='sep'></div>
                </div>
                <button onClick={spinRand} className='spin-bt'>Generate random</button>
            </div>

        </div>
    );
}


export { Spinwheel }; 
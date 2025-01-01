import React from 'react';

function NamelistChild(props) {
    return (
        <div>
            {props.namelist.map((item, index) => (
                <li>{item}</li>
            ))}
        </div>
    )

}

export {NamelistChild}
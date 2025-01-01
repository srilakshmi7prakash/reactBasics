import React from 'react'
import { NamelistChild } from './namelistchild';

function Namelist() {
    const namelst=["anil","nitha","Arun","listin"];
    return (

       <NamelistChild namelist={namelst} />
    )
}

export { Namelist };
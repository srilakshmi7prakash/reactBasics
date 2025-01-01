import React from "react"
import { Childcomp } from "./componentSample"

function Compparent() {
    const det = {
        name: 'Ann',
        country: 'Netherlands'
    };
    return (
       <Childcomp details= {det} />
    );
}



export {Compparent}
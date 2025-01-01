import React from "react";
import ChildDisplay from "./nameDisplayChild";


function NameParent() {
    return (
        <ChildDisplay
            firstName='John' lastName="Doe"
        />

    );
}


export default NameParent;
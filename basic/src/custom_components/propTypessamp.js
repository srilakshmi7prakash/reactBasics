import React from 'react';
import PropTypes from 'prop-types';


function Propsamp(props){
  return (
    <ul>
        <li>My name : {props.name}</li>
        <li>My Age : {props.age}</li>
        <li>I have  : {props.children} children</li>

    </ul>
  )
}

Propsamp.propTypes={
    name : PropTypes.string.isRequired,
    age : PropTypes.number.isRequired,
    children : PropTypes.number.isRequired
}
export {Propsamp};
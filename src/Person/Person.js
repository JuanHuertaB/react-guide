import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}> Soy {props.name}, tengo {props.age} años</p>
            <p> {props.children} </p>
            <input onChange={props.changed} value={props.name} />
        </div>

    )
};

export default person;

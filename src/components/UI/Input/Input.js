import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

//Use ref (second argument in order to use useImperativeHandle)
const Input = React.forwardRef((props, ref) => {
    //Create reference to the input field.
    const inputRef = useRef();

    //Create function that focuses this input when needed (when empty)
    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
        return {
            //Give activate function an external name 'focus' to use outside comonent
            focus: activate
        };
    });

    return (
        <div
            className={`${classes.control} ${
                props.isValid === false ? classes.invalid : ''
            }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
});

export default Input;
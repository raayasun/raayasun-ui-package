import React, {forwardRef} from 'react';
import styles from './Input.module.css'
import {FloatingLabel, Form} from "react-bootstrap";

const Input = forwardRef(({type, name, placeholder, label, value, ...props}, ref) => {
    // console.log('its ref', ref)
    return (
        <div className="form-floating">
            <input
                type={type}
                className={`form-control ${styles.customInput} custom-input`}
                id={`input-${name}`}
                placeholder={placeholder}
                name={name}
                ref={ref}
                {...props}
            />
            <label htmlFor={`input-${name}`}>{label}</label>
        </div>
    );
});

export default Input;

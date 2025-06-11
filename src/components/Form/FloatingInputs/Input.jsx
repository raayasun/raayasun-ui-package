import React from 'react';
import styles from './Input.module.css'
import {FloatingLabel, Form} from "react-bootstrap";

const Input = ({type, name, placeholder, label, value, ...props}, ref) => {
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
    )
};
export default Input;

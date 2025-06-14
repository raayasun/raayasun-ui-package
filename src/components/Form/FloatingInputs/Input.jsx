import React from 'react';
import styles from './Input.module.css'
import {FloatingLabel, Form} from "react-bootstrap";

const Input = ({type, placeholder, label, value, name , ...props}) => {
    return (
        <div className="form-floating">
            <input
                type={type}
                className={`form-control ${styles.customInput} custom-input`}
                id={name}
                placeholder={placeholder}
                name={name}
                {...props}

            />
            <label htmlFor={name}>{label}</label>
        </div>
    )
};
export default Input;

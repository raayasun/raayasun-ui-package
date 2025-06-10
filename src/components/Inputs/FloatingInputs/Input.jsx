import React from 'react';
import styles from './Input.module.css'
import {FloatingLabel, Form} from "react-bootstrap";

const Input = ({type, placeholder, label, value, name}) => {
    return (
        <div className="form-floating mb-3">
            <input type={type} className={`form-control ${styles.customInput} custom-input`} id="floatingInput"
                   placeholder={placeholder}/>
            <label htmlFor="floatingInput">{label}</label>
        </div>
)
    ;
};
export default Input;

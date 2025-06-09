import React from 'react';
import styles from './Input.module.css'
import {Link} from "react-router-dom";
import {FloatingLabel, Form} from "react-bootstrap";

const Input = ({type, placeholder, label, value , name}) => {
    return (
        <FloatingLabel
            label={label}
            className="mb-3"
        >
            <Form.Control type={type} placeholder={placeholder} value={value} name={name} className={`${styles.input} custom-input`}/>
        </FloatingLabel>
    );
};
export default Input;

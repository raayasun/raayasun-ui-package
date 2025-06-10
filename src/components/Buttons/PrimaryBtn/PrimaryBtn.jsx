import React, {useContext} from 'react';
import styles from './PrimaryBtn.module.css';
import {UNSAFE_RouteContext} from "react-router-dom";

const PrimaryBtn = ({title, type, ...props}) => {
    return (
        <button type={type} className={`fw-bold btn text-center ${styles.primaryBtn}`} {...props}>
            {title}
        </button>
    );
};

export default PrimaryBtn;

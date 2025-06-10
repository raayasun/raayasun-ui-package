import React from 'react';
import styles from './MainCard.module.css'
import {FloatingLabel, Form} from "react-bootstrap";

const MainCard = ({children }) => {
    return (
       <div className={styles.card}>
           {children }
       </div>
    );
};
export default MainCard;

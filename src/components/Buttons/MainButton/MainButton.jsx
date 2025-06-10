import React, { useContext } from 'react';
import styles from './MainButton.module.css';
import {UNSAFE_RouteContext } from "react-router-dom";

const MainButton = ({ title, imageUrl }) => {
    const routerContext = useContext(UNSAFE_RouteContext); // محافظت در برابر نبود Router

    if (!routerContext) return null; // از رندر خارج شو اگر Router وجود نداشت

    return (
        <div
              className={`d-flex flex-column justify-content-around text-decoration-none fw-bold ${styles.card}`}>
            {imageUrl && <img src={imageUrl} alt={title} className={`mx-auto ${styles.image}`} />}
            <h3 className={`mt-3 text-center fw-bold ${styles.title}`}>{title}</h3>
        </div>
    );
};

export default MainButton;

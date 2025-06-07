import React from 'react';
import styles from './MainButton.module.css';
import {Link} from "react-router-dom";

const MainButton = ({title, imageUrl, href}) => {
    return (
        <Link to={href}
              className={`d-flex flex-column justify-content-around  text-decoration-none fw-bold ${styles.card}`}>
            {imageUrl && <img src={imageUrl} alt={title} className={`mx-auto ${styles.image}`}/>}
            <h3 className={`mt-3 text-center fw-bold ${styles.title}`}>{title}</h3>
        </Link>
    );
};

export default MainButton;

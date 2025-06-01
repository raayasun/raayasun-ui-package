import React from 'react';
import styles from './CardButton.module.css';
import {Link} from "react-router-dom";

const CardButton = ({title, imageUrl, navigateUrl}) => {
    return (
        <Link to={navigateUrl} className={`d-flex flex-column justify-content-around rounded-4 text-decoration-none fw-bold ${styles.card}`}>
            {imageUrl && <img src={imageUrl} alt={title} className={`mx-auto ${styles.image}`}/>}
            <h3 className={`mt-3 text-center fw-bold ${styles.title}`}>{title}</h3>
        </Link>
    );
};

export default CardButton;

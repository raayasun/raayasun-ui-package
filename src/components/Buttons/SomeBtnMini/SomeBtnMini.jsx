import React from 'react';
import styles from './SomeBtnMini.module.css'

const SomeBtnMini = ({title, imageUrl, iconUrl}) => {
    return (
        <div
            className={`d-flex align-items-center justify-content-between  text-decoration-none fw-bold ${styles.card}`}>
            <div className={"d-flex align-items-center "}>
                {imageUrl && <img src={imageUrl} alt={title} className={`mx-auto ${styles.image}`}/>}
                <h3 className={` text-center fw-bold m-0 ms-2 ${styles.title}`}>{title}</h3>
            </div>
            {iconUrl && <img src={iconUrl} alt={title} className={`${styles.icon}`}/>}
        </div>
    );
};
export default SomeBtnMini;

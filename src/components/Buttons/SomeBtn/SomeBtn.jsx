import React from 'react';
import styles from './SomeBtn.module.css'
import {Link} from "react-router-dom";

const SomeBtn = ({title, imageUrl, subTitle , iconUrl}) => {
    return (
        <div
              className={`d-flex align-items-center justify-content-between  text-decoration-none fw-bold ${styles.card}`}>
            <div className={"d-flex align-items-center "}>
                {imageUrl && <img src={imageUrl} alt={title} className={`mx-auto ${styles.image}`}/>}
             <div className={"d-flex flex-column ms-2"}>
                 <h3 className={` text-center m-0 mb-2 fw-bold ${styles.title}`}>{title}</h3>
                 <span className={styles.subTitle}>{subTitle}</span>
             </div>
            </div>
            {iconUrl && <img src={iconUrl} alt={title} className={`${styles.icon}`}/>}
        </div>
    );
};

export default SomeBtn;

import React from 'react';
import styles from './EventBtn.module.css'
const SomeBtn = ({title, subTitle, date, bgColor}) => {
    return (
        <div className={`d-flex align-items-center justify-content-between  text-decoration-none fw-bold ${styles.card} ${styles[bgColor]}`}>
            <div className={"d-flex align-items-center "}>
                <div className={"d-flex align-items-center ms-2"}>
                    <h3 className={` text-center m-0  ${styles.title}`}>{title}</h3>
                    <span className={`ms-2 ${styles.subTitle}`}>#{subTitle}</span>
                </div>
            </div>
            <span className={styles.date}>{date}</span>
        </div>
    );
};
export default SomeBtn;

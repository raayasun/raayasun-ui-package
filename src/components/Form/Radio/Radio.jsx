import React from 'react';
import styles from './Radio.module.css'; // در صورت استفاده از استایل سفارشی

const Radio = ({ label, value, name, id, ...props }) => {
    const inputId = id || `radio-${name}-${value}`;

    return (
        <div className="form-check">
           <div className={styles.bgPrimary}>
               <input
                   className={`form-check-input ${styles.customInput}`}
                   type="radio"
                   name={name}
                   id={inputId}
                   value={value}
                   {...props} // شامل onChange، checked، disabled و غیره
               />
           </div>
            <label className={`form-check-label ${styles.Label}`} htmlFor={inputId}>
                {label}
            </label>
        </div>
    );
};

export default Radio;

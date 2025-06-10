import React from 'react';
import styles from './Select.module.css';

const Select = ({label, options = [], id = "floatingSelect", ...props}) => {
    return (
        <div className="form-floating ">
            <select
                className={`form-select ${styles.customInput}`}
                id={id}
                {...props}
            >
                {options.map((opt, index) => (
                    <option key={index} value={opt?.value}>
                        {opt?.name}
                    </option>
                ))}
            </select>
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default Select;

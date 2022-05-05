import React, { useEffect } from 'react'
import st from './input.module.scss'

const Input = ({id, value, className}) => {


    return (
        <label className={`${st.filter__label} ${className}`} data-category-id={id}>
            <input type="checkbox"/><span className="span-value">{value}</span>
        </label>
    )
}


export default Input
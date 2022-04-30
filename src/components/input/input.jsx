import React, { useEffect } from 'react'
import st from './input.module.css'

const Input = ({id, value}) => {


    return (
        <label className="filter__label" data-category-id={id}>
            <input type="checkbox"/><span className="span-value">{value}</span>
        </label>
    )
}


export default Input
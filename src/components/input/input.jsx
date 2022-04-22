import React, { useEffect } from 'react'
import st from './input.module.css'

const Input = (props) => {


    return (
        <label className="filter__label" >
            <input type="checkbox"/><span className="span-value">{props.value}</span>
        </label>
    )
}


export default Input
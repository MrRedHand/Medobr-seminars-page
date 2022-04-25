import React, { useEffect } from 'react'
import st from './input.module.scss'

const Input = ({id, value}) => {


    return (
        <label className={st.filter__label} data-category-id={id}>
            <input type="checkbox"/><span className={st['span-value']}>{value}</span>
        </label>
    )
}


export default Input
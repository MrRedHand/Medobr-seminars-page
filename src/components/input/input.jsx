import React from 'react'
import PropTypes from 'prop-types';
import st from './input.module.css'

const Input = (props) => {
    return (
        <label className={`${props.labelClass}`}>
            <span 
                className={`${props.spanClass}`}>
                    {props.spanDescription}
            </span>
            <input 
                className={`${props.inputClass}`} 
                placeholder={`${props.placeholder}`} 
                type={`${props.type}`} 
                name={`${props.name}`} 
                value={`${props.value}`} />
        </label>
    )
}

Input.propTypes = {
    labelClass: PropTypes.string,
    spanClass: PropTypes.string,
    inputClass: PropTypes.string,
    spanDescription: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
}

export default Input
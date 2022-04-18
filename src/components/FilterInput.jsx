import React from "react";

export default function FilterInput(props) {
    const debugInput = (val) => {console.log("Был кликнут инпут: " + val)}
    return (
        <>
            <label className="filter__label" >
                <input type="checkbox" onChange={() => {debugInput(props.value)}}/><span className="span-value">{props.value}</span>
            </label>
        </>
    )
}
import React from 'react'
import st from "./seminar-item-base.module.scss";

const SeminarItemCats = (props) => {
    return (
        <div className="seminar-item__cats has-tooltip">
            <div className="cats__text max-round sm-btn">
                {props.categories !== null &&
                props.categories.length > 0 &&
                props.categories.length + " категорий"}
            </div>
            <div className="seminar-item__tooltip">
                <ul>
                {props.categories !== null &&
                    props.categories.length > 0 &&
                    props.categories.map((elem) => {
                    return <li key={elem.id}>{elem.name}</li>;
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SeminarItemCats
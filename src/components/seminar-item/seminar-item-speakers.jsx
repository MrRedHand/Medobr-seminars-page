import React from 'react'

const SeminarItemSpeakers = (props) => {
    return (
        <div className="seminar-item__speakers has-tooltip">
            <div className="speakers__text max-round sm-btn">
                Семинар ведут {props.lector.length} лекторов
            </div>
            <div className="seminar-item__tooltip">
                <div className="tooltip__heading">Лекторы</div>
                <ul>
                {props.lector.map((elem) => {
                    return <li key={elem}>{elem}</li>;
                })}
                </ul>
            </div>
        </div>
    )
}

export default SeminarItemSpeakers
import React from 'react'

const SeminarItemFooter = (props) => {
    return (
        <div className="seminar-item__footer">
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
            <div className="seminar-item__cicle has-tooltip">
                <div className="cicle__text max-round sm-btn">Часть цикла</div>
                <div className="seminar-item__tooltip"></div>
            </div>
        </div>
    )
}

export default SeminarItemFooter
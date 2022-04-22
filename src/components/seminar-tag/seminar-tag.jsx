import React from "react";

export default function SeminarTag(props) {
    return (

        <div className="seminar-item__tags">
            <div className="nmo-tag">
                <div className="nmo-tag__body">
                    <div className="nmo-tag__value">188 {props.nmovalue}</div>
                    <div className="nmo-tag__state"></div>
                </div>
                <div className="nmo-tag__tooltip">
                    <div className="nmo-tag__tooltip-caption"></div>
                    <p className="nmo-tag__tooltip-text"></p>
                </div>
            </div>
        </div>
    )
}
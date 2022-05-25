import React from "react";
import SeminarNmoTag from "./seminar-nmo-tag";

export default function SeminarItemSecondary(props) {
    return (
        <div className="seminar-item secondary">
            <div className="seminar-item__body">
                <div className="seminar-item__header">
                    <div className="seminar-item__type">Высший мед</div>
                    <div className="seminar-item__hours-and-price">36 часов / 8450 руб.</div>
                    <div className="seminar-item__cats has-tooltip">
                        <div className="cats__text max-round sm-btn"> { /* props.categories.length */} категорий</div>
                        <div className="seminar-item__tooltip">
                            <ul>
                            {   
                                
                                // props.categories.map(elem => {
                                //     return (<li key={elem}>{elem}</li>)
                                // })
                            }
                            </ul>
                        </div>
                    </div>

                    <SeminarNmoTag/>
                </div>

                <div className="seminar-item__title"><a href={"https://medobr.com" + props.url} >{props.title}</a></div>
            </div>
            
            <div className="seminar-item__right">
                <button className="seminar-item__buy-btn btn cta-btn">Оплатить 8990 руб.</button>
                <button className="seminar-item__consult-btn btn">Получить консультацию</button>
            </div>                
            
        </div>
    )
}
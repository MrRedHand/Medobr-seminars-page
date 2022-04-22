import React from "react";
import st from './seminar-item-base.module.css';


const BaseSeminarItem = (props) => {
    return(
        <div className="seminar-item">
            <div className="seminar-item__header">
                <div className="seminar-item__date">{props.date}</div>
                <div className="seminar-item__day">Пн</div>
                <div className="seminar-item__watch-count has-tooltip">
                    <div className="watch-count__text max-round sm-btn">399</div>
                    <div className="seminar-item__tooltip"></div>
                </div>
                <div className="seminar-item__cats has-tooltip">
                    <div className="cats__text max-round sm-btn">{props.categories.length} категорий</div>
                    <div className="seminar-item__tooltip">
                        <ul>
                        {   
                            
                            props.categories.map(elem => {
                                return (<li key={elem}>{elem}</li>)
                            })
                        }
                        </ul>
                    </div>
                </div>
                <div className="seminar-item__specs has-tooltip">   
                    <div className="specs__text max-round sm-btn">6 специальностей</div>
                    <div className="seminar-item__tooltip"></div>
                </div>
                
                <SeminarTag />
            </div>
            <div className="seminar-item__body">
                <div className="seminar-item__title"><a href={"https://medobr.com" + props.url} >{props.title}</a></div>
            </div>
            <div className="seminar-item__footer">
                <div className="seminar-item__speakers has-tooltip">
                    <div className="speakers__text max-round sm-btn">Семинар ведут {props.lectors.length} лекторов</div>
                    <div className="seminar-item__tooltip">
                    <div className="tooltip__heading">Лекторы</div>
                    <ul>
                        {
                            props.lectors.map(elem => elem)
                        }
                    </ul>
                    </div>
                </div>
                <div className="seminar-item__cicle has-tooltip">   
                    <div className="cicle__text max-round sm-btn">Часть цикла</div>
                    <div className="seminar-item__tooltip"></div>
                </div>
            </div>
            <div className="seminar-item__right-col">
                <div className="seminar-item__seminar-avatar">
                    <img src={props.pic} alt="" /> 
                </div>
                <button className="seminar-item__call-me-btn btn cta-btn">Оставить заявку</button>
            </div>
        </div>
    ) 
}


export default BaseSeminarItem
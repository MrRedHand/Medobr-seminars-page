import React from 'react'
import st from "./filter.module.scss";
import Input from "../input/input";


const DatesFilter = ({title}) => {
    return (
        <>
        <div className="filter" id="filter-dates">
          <div className="filter__heading">{title}</div>
          <div className="filter__labels-wrapper">
            <b>2021</b>
            <Input value={'Октябрь'} eventsCount={'123'}/>
            <Input value={'Октябрь'} eventsCount={'123'}/>
            <Input value={'Октябрь'} eventsCount={'123'}/>
            <Input value={'Октябрь'} eventsCount={'123'}/>
            <b>2022</b>
            
          </div>
          <button>
            <span className="folded-btn">Показать всё</span>
            <span className="unfolded-btn">Свернуть</span>
          </button>
        </div>   
        </>
    )
}

export default DatesFilter
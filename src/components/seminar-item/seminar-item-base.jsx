import React from "react";
import st from "./seminar-item-base.module.scss";
import { monthNamesEnds } from "../../services/getMonthName";
import { daysNames } from "../../services/getDayName";
import { EyeFill } from 'react-bootstrap-icons';
import { PatchExclamationFill } from 'react-bootstrap-icons';

const SeminarItemBase = (props) => {

  let [day, month, year] = props.date.split(".");

  const currMonth = monthNamesEnds[month-1]

  const currDay = daysNames[props.weekDay]

  return (
    <div className={`${st.seminar_item} container p-4`}>

      <div className={`row`}>
      
        <div className="col-lg-9">
          <div className={`${st.seminar_item__header} d-flex flex-lg-row font-grey`}>

            <div className="seminar_item__date font-16 font-black">
              {`${day} ${currMonth}`}
            </div>

            <div className="seminar_item__week_day">
              {currDay}
            </div>

            <div className="seminar_item__tags d-flex flex-lg-row">
              <div className="seminar_item__tag tag_new">
                  <PatchExclamationFill color="#FEDF7F" size={18}/>
                  <span className="ml-2">Новое</span>
              </div>
              <div className="seminar_item__tag tag_views">
                  <EyeFill color="#8DDCE2" size={18} />
                  <span className="ml-2">977</span>
              </div>
            </div>

            <div className="seminar_item__cat">

            </div>

            <div className="seminar_item__specs">
              
            </div>

            <div className="seminar_item__nmo-sign">
              {props.nmovalue}
            </div>
          </div>
          
          <div className={`${st.seminar_item__title} font-20 font-bold`}>
            {props.name}
          </div>
        
        {/* {props.date}
        {`https://medobr.com${props.detailPageUrl}`}{props.name}
        {`https://medobr.com${props.imgLink}`}

        Семинар ведут {props.lector.length} лекторов

        <ul>
          {props.lector.map((elem) => {
              return <li key={elem}>{elem}</li>;
          })}
        </ul>

        {props.categories !== null &&
        props.categories.length > 0 &&
        props.categories.length + " категорий"}

        <ul>
        {props.categories !== null &&
            props.categories.length > 0 &&
            props.categories.map((elem) => {
            return <li key={elem.id}>{elem.name}</li>;
            })}
        </ul>

        {props.nmovalue}

        {props.viewCounts !== null && props.viewCounts} */}

        </div>

        <div className="col-lg-3">

        </div>

      </div>

    </div>
  );
};

export default SeminarItemBase;

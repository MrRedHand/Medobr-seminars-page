import React, { useState } from "react";
import st from "./filter.module.scss";
import Input from "../input/input";
import { useSelector } from "react-redux";

const DatesFilter = ({ title }) => {
  const { startDates, selectedDates } = useSelector((state) => state.seminarsFiltration);

  return (
    <>
      <div className={st.filter} id="filter-dates">
      <div className={st.filter__heading}>{title}</div>
        <div className={`${st.filter__labels_wrapper} mt-3 mb-3`}>
          {
            startDates.map((elem, index) => {
              let curYear = elem.year
              return (
              <>
                <b key={index}>{curYear}</b>
                {elem.months.map((elem, i) => {
                  return elem.count > 0 && (<Input key={i} value={elem.name} eventsCount={elem.count} year={curYear} month={elem} monthIndex={i+1} selected={selectedDates}/>)
                })}
              </>
              )
            })
          }
        </div>
        {/* <button>
          <span className="folded-btn">Показать всё</span>
          <span className="unfolded-btn">Свернуть</span>
        </button> */}
      </div>
    </>
  );
};

export default DatesFilter;

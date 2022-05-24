import React, { useState } from "react";
import st from "./filter.module.scss";
import Input from "../input/input";
import { useSelector } from "react-redux";

const DatesFilter = ({ title }) => {
  const { startDates } = useSelector((state) => state.seminarsFiltration);

  return (
    <>
      <div className="filter" id="filter-dates">
        <div className="filter__heading">{title}</div>
        <div className="filter__labels-wrapper">
          {
            startDates.map((elem, index) => {
              return (
              <>
                <b key={index}>{elem.year}</b>
                {elem.months.map((elem, i) => {
                  return elem.count > 0 && (<Input key={i} value={elem.name} eventsCount={elem.count}/>)
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

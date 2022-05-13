import React, { useState, useEffect, useContext } from "react";
import MainSearchInput from "../main-search-input/main-search-input";
import Input from "../input/input";
import SkeletonFilterItem from "../skeleton-filter-item";
import BaseFilter from "../filter/base-filter";
import SpecsFilter from "../filter/specs-filter";
import { useDispatch, useSelector } from "react-redux";
import DatesFilter from "../filter/dates-filter";

export default function Sidebar({
  cats,
  types,
  nmoSpecsVmp,
  nmoSpecsSmp,
  dates,
}) {
  const { sidebarDataIsReady } = useSelector(
    (state) => state.seminarsFiltration
  );

  const someRef = React.createRef();

  useEffect(() => {
    const si = document.querySelector(".sec");
    //si.addEventListener('onchange', console.log('in'))
    // console.log(si)
    // console.log(someRef)
  });

  return (
    <div className="sidebar-filters">
      <div className="sidebar-filters__heading">Семинары</div>
      <input type="search" name="" id="" ref={someRef} className='sec'/>
       <MainSearchInput /> 

      <div id="filters-wrap">
        {sidebarDataIsReady ? (
          <BaseFilter title={"Категории"} />
        ) : (
          <SkeletonFilterItem />
        )}
        {sidebarDataIsReady ? (
          <SpecsFilter title={"Выбор специальности с НМО"} />
        ) : (
          <SkeletonFilterItem />
        )}

        <DatesFilter title={'Календарь'}/>
      </div>
    </div>
  );
}

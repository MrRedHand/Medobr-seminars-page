import React, { useState, useEffect, useContext } from "react";
import MainSearchInput from "../main-search-input/main-search-input";
import Input from "../input/input";
import SkeletonFilterItem from "../skeleton-filter-item";
import BaseFilter from "../filter/base-filter";
import SpecsFilter from "../filter/specs-filter";
import { useDispatch, useSelector } from "react-redux";
import DatesFilter from "../filter/dates-filter";

const Sidebar = () => {

  const { sidebarDataIsReady } = useSelector(
    (state) => state.seminarsFiltration
  );

  return (
    <div className="sidebar-filters">
      <div className="sidebar-filters__heading">Семинары</div>
        <MainSearchInput/> 

      <div id="filters-wrap">
        {sidebarDataIsReady ? (
          <BaseFilter title={"Категории"} />
        ) : (
          <SkeletonFilterItem />
        )}
        {/* {sidebarDataIsReady ? (
          <SpecsFilter title={"Выбор специальности с НМО"} />
        ) : (
          <SkeletonFilterItem />
        )}

        <DatesFilter title={'Календарь'}/> */}
      </div>
    </div>
  );
}

export default Sidebar

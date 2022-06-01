import React, { createRef, useEffect, useState } from "react";
import st from "./filter.module.scss";
import Input from "../input/input";
import { useSelector } from "react-redux";

const BaseFilter = ({ title }) => {

  const { startCats, selectedCategories } = useSelector((state) => state.seminarsFiltration);

  const [folded, setFold] = useState(true);

  const toggleFold = () => {
    setFold(!folded);
  };


  return (
    <div className={`${st.filter} ${folded ? st.folded : ""}`}>
      <div className={st.filter__heading}>{title}</div>

      <input
        className={`${st.filter__search_field} form-control  mt-3`}
        type="search"
        autoComplete={"off"}
        id="cat-search"
        data-search-target="#filter-cats"
      />

      <div className={`${st.filter__labels_wrapper} mt-3 mb-3`}>
        {startCats.map((cat, index) => {
          return ( <Input key={cat.id} catId={cat.id} value={cat.name} className={index > 6 ? st.hideable : ''} selected={selectedCategories}/>)
        })}
      </div>
      {
        <button onClick={() => toggleFold()}>
          {folded ? <span>Показать всё</span> : <span>Свернуть</span>}
        </button>
      }
    </div>
  );
};

export default BaseFilter;

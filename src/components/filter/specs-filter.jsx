import React, { useEffect, useRef, useState } from "react";
import st from "./filter.module.scss";
import Input from "../input/input";
import { useSelector } from "react-redux";

const SpecsFilter = ({ title }) => {
  const { startSmp, startVmp } = useSelector(
    (state) => state.seminarsFiltration
  );

  const searchRef = useRef();

  const [searchState, setSearchState] = useState({
    value : '',
    currentSMP : startSmp,
    currentVMP : startVmp
  })

  const [currentTab, setTabState] = useState({
    one : true,
    two : true
  })

  const switchTab = (tab) => {

  }

  const [folded, setFold] = useState(true);

  const toggleFold = () => {
    setFold(!folded);
  };


  function searchRefresh(text) {
    setSearchState({
      value : text,
      currentSMP : [...searchState.value].length > 0 ? (startSmp.filter(x => x.name.toUpperCase().includes(searchState.value.toUpperCase()))) : startSmp,
      currentVMP : [...searchState.value].length > 0 ? (startVmp.filter(x => x.name.toUpperCase().includes(searchState.value.toUpperCase()))) : startVmp
    })
  }

  return (
    <div
      className={`${st.filter} ${folded ? st.folded : ""}`}
      id="filter-specs"
    >
      <div className={st.filter__heading}>{title}</div>
      <div className={st.filter__tabs_btns}>
        <button data-tab-target="#vmp-tab" onClick={() => switchTab(one)} className={currentTab.one ? st.active : ''}>Высший мед. персонал</button>
        <button data-tab-target="#smp-tab" onClick={() => switchTab(two)} className={currentTab.two ? st.active : ''}>Средний мед персонал</button>
      </div>
      <input
        className={`${st.filter__search_field} form-control`}
        type="search"
        name=""
        id="specs-search"
        data-search-target="#filter-specs"
        onChange={e => searchRefresh(e.target.value)}
        onCut={e => searchRefresh(e.target.value)}
        onPaste={e => searchRefresh(e.target.value)}
        onKeyUp={e => searchRefresh(e.target.value)}
        onClick={e => searchRefresh(e.target.value)}
        onEmptied={e => searchRefresh(e.target.value)}
        onReset={e => searchRefresh(e.target.value)}
        ref={searchRef}
        value={searchState.value}
      />
      <div className={st.filter__labels_wrapper}>
        <div
          className="filter__labels-type-wrap"
          id="vmp-tab"
          data-tab-content=""
        >
          <b>Высшее медицинское образование</b>
          {searchState.currentVMP.map((cat, index) => {
            return <Input key={cat.id} catId={cat.id} value={cat.name} className={index > 2 ? st.hideable : ''}/>;
          })}
        </div>
        <div
          className="filter__labels-type-wrap"
          id="smp-tab"
          data-tab-content=""
        >
          {" "}
          <b>Среднее медицинское образование</b>
          {searchState.currentSMP.map((cat, index) => {
            return <Input key={cat.id} catId={cat.id} value={cat.name} className={index > 2 ? st.hideable : ''}/>;
          })}
        </div>
      </div>
      <button onClick={() => toggleFold()}>
        {folded ? <span>Показать всё</span> : <span>Свернуть</span>}
      </button>
    </div>
  );
};

export default SpecsFilter;

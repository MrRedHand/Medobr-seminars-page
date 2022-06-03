import React, { useEffect, useRef, useState } from "react";
import st from "./input.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { categoryRemoved, categorySelected, dateRemoved, dateSelected } from "../../services/actions/filtration-actions/filtrationActions";

const Input = ({ catId, value, className, eventsCount, selected, isSmpInput = false, isVmpInput = false, year = null, monthIndex = null}) => {

  const { fullDataIsWritten } = useSelector(state => state.seminarsFiltration)

  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const inputRef = useRef()

  let dateString = ''

  if (year !== null && monthIndex !== null) {
    dateString = year + '.' + monthIndex 
    dateString = Number(dateString)
  }

  const toggleCheckbox = () => {
    setChecked(!checked)
  }

  useEffect(() => {

    if (checked) {

      if (year !== null) {
        if (selected.filter(e => e === dateString).length > 0) {
          return
        } else {
          dispatch(dateSelected(dateString))
        }
      } else {
        if (selected.filter(e => e === catId).length > 0) {
          return
        } else {
          dispatch(categorySelected(catId))
        }
      }
      
      
    } else {
      if (year !== null) {
        if (selected.filter(e => e === dateString).length > 0) {
          dispatch(dateRemoved(dateString))
        }
      } else {
        if (selected.filter(e => e === catId).length > 0) {
          dispatch(categoryRemoved(catId))
        }
      }
      
    }

    
  }, [checked, selected])

  return (
    <label
      data-category-id={catId}
      className={`${st.filter__label} ${className} ${checked ? 'selected' : ''}`}
    >
      <input type="checkbox" ref={inputRef} checked={checked} onChange={() => toggleCheckbox()}/>
      <span className="span-value">{value}
      </span>
      {eventsCount > 0 && (
        <span className={st.events_count}>{eventsCount}</span>
      )}
    </label>
  );
};

export default Input;

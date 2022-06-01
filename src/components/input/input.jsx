import React, { useEffect, useRef, useState } from "react";
import st from "./input.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { categoryRemoved, categorySelected } from "../../services/actions/filtration-actions/filtrationActions";

const Input = ({ catId, value, className, eventsCount, selected }) => {

  const { fullDataIsWritten } = useSelector(state => state.seminarsFiltration)

  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const inputRef = useRef()

  const toggleCheckbox = () => {
    setChecked(!checked)
    // console.log(inputRef.current.checked)

    // if (checked) {
    //   if (selected.filter(e => e === catId).length > 0) {
    //     console.log(catId + ' уже есть')
    //     return
    //   } else {
    //     console.log(catId + ' отсутствует')
    //     dispatch(categorySelected(catId))
    //   }

    //   console.log(selected)
    // } else {
    //   console.log(selected)
    // }
  }

  useEffect(() => {

    if (checked) {
      if (selected.filter(e => e === catId).length > 0) {
        console.log(catId + ' уже есть')
      } else {
        console.log(catId + ' отсутствует')
        dispatch(categorySelected(catId))
        console.log(catId + ' добавлена')
      }
      console.log('текущий массив категорий ', selected)
    } else {
      if (selected.filter(e => e === catId).length > 0) {
        console.log('Есть совпадения')
        dispatch(categoryRemoved(catId))
      }
      console.log('текущий массив категорий ', selected)
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

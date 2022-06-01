import React, { useEffect, useRef, useState } from "react";
import st from "./input.module.scss";
import { useDispatch } from "react-redux";

const Input = ({ catId, value, className, eventsCount }) => {

  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const inputRef = useRef()

  const toggleCheckbox = () => {
    setChecked(!checked)
    console.log(inputRef.current.checked)
  }

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

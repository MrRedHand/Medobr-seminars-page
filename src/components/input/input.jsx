import React, { useEffect } from "react";
import st from "./input.module.scss";
import { useDispatch } from "react-redux";

const Input = ({ catId, value, className, eventsCount }) => {
  const dispatch = useDispatch();

  return (
    <label
      data-category-id={catId}
      className={`${st.filter__label} ${className}`}
    >
      <input type="checkbox" />
      <span className="span-value">{value}</span>
      {eventsCount > 0 && (
        <span className={st.events_count}>{eventsCount}</span>
      )}
    </label>
  );
};

export default Input;

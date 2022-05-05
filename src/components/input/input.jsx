import React, { useEffect } from "react";
import st from "./input.module.scss";
import { useDispatch } from "react-redux";

const Input = ({ catId, value, className }) => {
  const dispatch = useDispatch();

  return (
    <label
      className={`${st.filter__label} ${className === null ? className : ""}`}
      data-category-id={catId}
    >
      <input type="checkbox" />
      <span className="span-value">{value}</span>
    </label>
  );
};

export default Input;

import React, { useEffect, useRef, useState } from "react";
import st from "./input.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { categoryRemoved, categorySelected } from "../../services/actions/filtration-actions/filtrationActions";

const Input = ({ catId, value, className, eventsCount, selected }) => {

  const { fullDataIsWritten } = useSelector(state => state.seminarsFiltration)

  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const inputRef = useRef()

  let apiRequestSended = false;

  const toggleCheckbox = () => {
    setChecked(!checked)
  }

  useEffect(() => {

    if (checked) {
      if (selected.filter(e => e === catId).length > 0) {
        return
      } else {
        dispatch(categorySelected(catId))
      }
    } else {
      if (selected.filter(e => e === catId).length > 0) {
        dispatch(categoryRemoved(catId))
      }
    }

    if (!apiRequestSended) {

      fetch('https://medobr.com/seminar/json.php?only_new=Y', {
        method: 'POST',
        body: JSON.stringify(selected)
      })
            .then((response) => {
                if (response.ok) {
                    console.log(response.json())
                    return response.json();
                } else {
                    return Promise.reject(`Ошибка ${response.status}`);
                }
            })
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.error(error)
            });

      apiRequestSended = true;
    }

    console.log(JSON.stringify({'cats':[...selected]}))
  }, [checked, selected, apiRequestSended])

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

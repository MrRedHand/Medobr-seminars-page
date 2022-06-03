import { useDispatch, useSelector } from "react-redux";
import { filteredDataFailed, filteredDataRequest, filteredDataSuccess } from "../actions/filtration-request-actions/filtration-request-actions";

const {selectedCategories, selectedSmpSpecs, selectedVmpSpecs, selectedDates, selectedTypes} = useSelector(
    (state) => state.seminarsFiltration
  );

const dispatch = useDispatch()  

export const requestSeminars = () => {

    dispatch(filteredDataRequest())

    fetch('https://medobr.com/seminar/json.php', {
        method: 'POST',
        body: JSON.stringify({selectedCategories, selectedTypes, selectedSmpSpecs, selectedVmpSpecs, selectedDates})
      })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(`Ошибка ${response.status}`);
            }
        })
        .then((data) => {
            dispatch(filteredDataSuccess(data))
            console.log('data', data)
        })
        .catch((error) => {
            dispatch(filteredDataFailed())
            console.error(error)
        });
    console.log(JSON.stringify({selectedCategories, selectedSmpSpecs, selectedVmpSpecs, selectedDates}))
  }
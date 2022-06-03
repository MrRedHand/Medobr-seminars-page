import { useDispatch } from "react-redux";
import { filteredDataFailed, filteredDataRequest, filteredDataSuccess } from "../actions/filtration-request-actions/filtration-request-actions";

const dispatch = useDispatch()  

export const requestSeminars = filters => {

    dispatch(filteredDataRequest())

    fetch('https://medobr.com/seminar/json.php', {
        method: 'POST',
        body: JSON.stringify({filters})
      })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(`Ошибка ${response.status}`);
            }
        })
        .then((data) => {
            console.log('дата по фильтрованным семинарам получена')
            setTimeout(() => {
                console.log('таймаут отработал и теперь дата перезаписана')
                dispatch(filteredDataSuccess(data))
            }, 3500)
            
        })
        .catch((error) => {
            dispatch(filteredDataFailed())
            console.error(error)
        });
    console.log(JSON.stringify({filters}))
  }
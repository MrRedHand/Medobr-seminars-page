import {writeFullDataAction} from "../reducers/seminarsFiltration";

//сюда импортируется экшен из редюсера фильтрации
//для того чтобы передать полученные данные в редьюсер через экшен
//диспатч сюда присылает та функция, которая вызывает ЭТУ функцию

export  const  fetchData = () => {
    return function (dispatch) {
        fetch('https://medobr.com/seminar/json.php?only_new=Y')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    dispatch({type : 'GOT_ERRORS_DATA_IS_NOT_LOADED'})
                    return Promise.reject(`Ошибка ${response.status}`);
                }
            })
            .then((data) => {
                console.log('fetch got array', data)
                dispatch(writeFullDataAction(data))
            })
            .catch((error) => {
                console.error(error)
            });
    }
}
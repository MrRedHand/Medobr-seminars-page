//Первичные массивы для сайдбара
export const ADD_CATEGORIES_ARRAY = 'ADD_CATEGORIES_ARRAY';
export const ADD_NMO_VMP_ARRAY = 'ADD_NMO_VMP_ARRAY';
export const ADD_NMO_SMP_ARRAY = 'ADD_NMO_SMP_ARRAY';
export const ADD_MONTHS_ARRAY = 'ADD_MONTHS_ARRAY';
export const SIDEBAR_DATA_IS_READY = 'SIDEBAR_DATA_IS_READY';

//Сверка полученных данных
export const GOT_DATA_RESPONSE = 'GOT_DATA_RESPONSE'
export const GOT_ERRORS_DATA_IS_NOT_LOADED = 'GOT_ERRORS_DATA_IS_NOT_LOADED'
export const WRITE_FULL_DATA = 'WRITE_FULL_DATA' //Весь джейсон, полученный от запроса. Нужен, чтобы разобрать его на категории
export const FIRST_LOADING_IS_READY = 'FIRST_LOADING_IS_READY'; //Показываю скелетон до тех пор, пока не станет TRUE

//Поведение фильтров
export const CATEGORY_SELECTED = 'CATEGORY_SELECTED';
export const CATEGORY_REMOVED = 'CATEGORY_REMOVED';
export const TYPE_SELECTED = 'TYPE_SELECTED';
export const TYPE_REMOVED = 'TYPE_REMOVED';
export const NMO_VMP_SELECTED = 'NMO_VMP_SELECTED';
export const NMO_VMP_REMOVED = 'NMO_VMP_REMOVED';
export const NMO_SMP_SELECTED = 'NMO_SMP_SELECTED';
export const NMO_SMP_REMOVED = 'NMO_SMP_REMOVED';
export const DATE_SELECTED = 'DATES_SELECTED';
export const DATE_REMOVED = 'DATES_REMOVED';
export const CLEAR_FILTER = 'CLEAR_FILTER';

//Получение полного джейсона
export const GET_FULLDATA_REQUEST = 'GET_FULLDATA_REQUEST';
export const GET_FULLDATA_SUCCESS = 'GET_FULLDATA_SUCCESS';
export const GET_FULLDATA_FAILED = 'GET_FULLDATA_FAILED';

//Получение семинаров согласно фильтрам
export const FILTERED_DATA_REQUEST = 'FILTERED_DATA_REQUEST'
export const FILTERED_DATA_SUCCESS = 'FILTERED_DATA_SUCCESS'
export const FILTERED_DATA_FAILED = 'FILTERED_DATA_FAILED'




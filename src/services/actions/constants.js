//Первичные массивы для сайдбара
export const ADD_CATEGORIES_ARRAY = 'ADD_CATEGORIES_ARRAY';
export const ADD_NMO_VMP_ARRAY = 'ADD_NMO_VMP_ARRAY';
export const ADD_NMO_SMP_ARRAY = 'ADD_NMO_SMP_ARRAY';
export const ADD_MONTHS_ARRAY = 'ADD_MONTHS_ARRAY';

//Сверка полученных данных
export const GOT_DATA_RESPONSE = 'GOT_DATA_RESPONSE'
export const GOT_ERRORS_DATA_IS_NOT_LOADED = 'GOT_ERRORS_DATA_IS_NOT_LOADED'
export const WRITE_FULL_DATA = 'WRITE_FULL_DATA' //Весь джейсон, полученный от запроса. Нужен, чтобы разобрать его на категории
export const FIRST_LOADING_IS_READY = 'FIRST_LOADING_IS_READY'; //Показываю скелетон до тех пор, пока не станет TRUE

//Поведение фильтров
export const CATEGORY_CHECKED = 'CATEGORY_CHECKED';
export const CATEGORY_UNCHECKED = 'CATEGORY_UNCHECKED';
export const TYPE_CHECKED = 'TYPE_CHECKED';
export const TYPE_UNCHECKED = 'TYPE_UNCHECKED';
export const NMO_VMP_CHECKED = 'NMO_VMP_CHECKED';
export const NMO_VMP_UNCHECKED = 'NMO_VMP_UNCHECKED';
export const NMO_SMP_CHECKED = 'NMO_SMP_CHECKED';
export const NMO_SMP_UNCHECKED = 'NMO_SMP_UNCHECKED';
export const CLEAR_FILTER = 'CLEAR_FILTER';

//Получение полного джейсона
export const GET_FULLDATA_REQUEST = 'GET_FULLDATA_REQUEST';
export const GET_FULLDATA_SUCCESS = 'GET_FULLDATA_SUCCESS';
export const GET_FULLDATA_FAILED = 'GET_FULLDATA_FAILED';




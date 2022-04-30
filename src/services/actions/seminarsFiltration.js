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
export const CATEGORY_CHECKED = 'ADD_CATEGORY';
export const CATEGORY_UNCHECKED = 'REMOVE_CATEGORY';
export const TYPE_CHECKED = 'ADD_TYPE';
export const TYPE_UNCHECKED = 'REMOVE_TYPE';
export const NMO_VMP_CHECKED = 'ADD_SPECIALTY';
export const NMO_VMP_UNCHECKED = 'ADD_SPECIALTY';
export const NMO_SMP_CHECKED = 'ADD_SPECIALTY';
export const NMO_SMP_UNCHECKED = 'ADD_SPECIALTY';
export const CLEAR_FILTER = 'CLEAR_FILTER';
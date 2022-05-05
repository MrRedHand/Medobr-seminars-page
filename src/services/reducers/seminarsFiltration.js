import {
    ADD_CATEGORIES_ARRAY,
    ADD_MONTHS_ARRAY,
    ADD_NMO_SMP_ARRAY,
    ADD_NMO_VMP_ARRAY,
    WRITE_FULL_DATA,
    FIRST_LOADING_IS_READY,
    GOT_ERRORS_DATA_IS_NOT_LOADED
} from '../actions/constants'

const initialState = {
    startCats : [],
    startSmp : [],
    startVmp : [],
    startMonths : [],
    gotDataResponse : false,
    firstLoadingIsReady: false,
    dataUrl : '../../data/seminars999.json',
    fullData : [],
    fullDataGotErrors: false,
    fullDataIsWritten : false,
}

export const seminarsFiltrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORIES_ARRAY:
            return {
                ...state,
                startCats: [...state.startCats, ...action.payload]
            }
        case ADD_NMO_VMP_ARRAY:
            return {
                ...state,
                startVmp: [...state.startVmp, ...action.payload]
            }
        case ADD_NMO_SMP_ARRAY:
            return {
                ...state,
                startSmp: [...state.startSmp, ...action.payload]
            }
        case ADD_MONTHS_ARRAY:
            return {
                ...state,
                startMonths: [...state.startMonths, ...action.payload]
            }
        case  WRITE_FULL_DATA:
            return {
                ...state,
                fullData : [...state.fullData, ...action.payload],
                fullDataIsWritten : true,
            }
        case GOT_ERRORS_DATA_IS_NOT_LOADED:
            return  {
                ...state,
                fullDataGotErrors: true,
            }
        default:
            return  state;
    }
 }

 export const writeFullDataAction = (payload) => ({type : WRITE_FULL_DATA, payload});
export  const writeCatsAction = (payload) => ({type : ADD_CATEGORIES_ARRAY, payload});
export  const writeNmoVmpAction = (payload) => ({type : ADD_NMO_VMP_ARRAY, payload});
export  const writeNmoSmpAction = (payload) => ({type : ADD_NMO_SMP_ARRAY, payload});

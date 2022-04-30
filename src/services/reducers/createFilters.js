import {
    ADD_CATEGORIES_ARRAY,
    ADD_MONTHS_ARRAY,
    ADD_NMO_SMP_ARRAY,
    ADD_NMO_VMP_ARRAY
} from '../actions/createFilters'

const initialState = {
    startCats : [],
    startSmp : [],
    startVmp : [],
    startMonths : []
}

export const createFiltersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORIES_ARRAY:
            return {
                ...state,
                startCats: [...state.startCats, action.payload]
            }
        case ADD_NMO_VMP_ARRAY:
            return {
                ...state,
                startVmp: [...state.startVmp, action.payload]
            }
        case ADD_NMO_SMP_ARRAY:
            return {
                ...state,
                startSmp: [...state.startSmp, action.payload]
            }
        case ADD_MONTHS_ARRAY:
            return {
                ...state,
                startMonths: [...state.startMonths, action.payload]
            }
        default:
            return  state;
    }
 }

import { combineReducers } from 'redux';
import {createFiltersReducer} from './createFilters'

export const rootReducer = combineReducers({
    createFilters: createFiltersReducer
})

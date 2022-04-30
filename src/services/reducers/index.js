import { combineReducers } from 'redux';
import {filtration} from './filtration'
import {createFilters} from './createFilters'

export const rootReducer = combineReducers({
    filtration,
    createFilters
})
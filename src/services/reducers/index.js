import { combineReducers } from 'redux';
import {seminarsFiltrationReducer} from './seminarsFiltration'

export const rootReducer = combineReducers({
    seminarsFiltration: seminarsFiltrationReducer
})

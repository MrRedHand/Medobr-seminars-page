import { FILTERED_DATA_FAILED, FILTERED_DATA_REQUEST, FILTERED_DATA_SUCCESS } from "../constants";

export const filteredDataRequest = payload => ({ type: FILTERED_DATA_REQUEST});

export const filteredDataSuccess = payload => ({ type: FILTERED_DATA_SUCCESS, payload });

export const filteredDataFailed = payload => ({ type: FILTERED_DATA_FAILED});
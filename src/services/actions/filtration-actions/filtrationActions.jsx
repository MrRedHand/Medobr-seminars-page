import { CATEGORY_REMOVED, CATEGORY_SELECTED, DATE_REMOVED, DATE_SELECTED, NMO_SMP_REMOVED, NMO_SMP_SELECTED, NMO_VMP_REMOVED, NMO_VMP_SELECTED, TYPE_REMOVED, TYPE_SELECTED } from "../constants";

export const categorySelected = payload => ({type : CATEGORY_SELECTED, payload})

export const categoryRemoved = payload => ({type : CATEGORY_REMOVED, payload})

export const typeSelected = payload => ({type : TYPE_SELECTED, payload})

export const typeRemoved = payload => ({type : TYPE_REMOVED, payload})

export const nmoSmpSelected = payload => ({type : NMO_SMP_SELECTED, payload})

export const nmoSmpRemoved = payload => ({type : NMO_SMP_REMOVED, payload})

export const nmoVmpSelected = payload => ({type : NMO_VMP_SELECTED, payload})

export const nmoVmpRemoved = payload => ({type : NMO_VMP_REMOVED, payload})

export const dateSelected = payload => ({type  : DATE_SELECTED, payload})

export const dateRemoved = payload => ({type  : DATE_REMOVED, payload})
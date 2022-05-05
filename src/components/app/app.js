import React, { useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Sidebar from '../sidebar/sidebar';
import SeminarsList from '../seminars-list/seminars-list';
import TrajectoryBanner from "../trajectory-banner/trajectory-banner";
import {
  ADD_CATEGORIES_ARRAY,
  ADD_NMO_SMP_ARRAY,
  ADD_NMO_VMP_ARRAY,
  WRITE_FULL_DATA
} from "../../services/actions/constants";
import {fetchData} from "../../services/asyncActions/getFullData";
import {createStartData} from "../../services/asyncActions/createStartData";

export default function App() {

  const dispatch = useDispatch()

  const {fullData, startCats, startVmp, startSmp, fullDataIsWritten} = useSelector(state => state.seminarsFiltration)


  useEffect(() => {
    //redux-thunk - вызов вынесенной функции
    dispatch(fetchData())

    fullDataIsWritten && dispatch(createStartData(fullData))

    console.log('fullData', fullData)

  }, [fullDataIsWritten])

  return (
    <div className="container seminars-list-page">
        <div className='row'>
          <div className='col-lg-3'>
              <Sidebar/>
          </div>
          <div className='col-lg-9'>
              <TrajectoryBanner />
              <SeminarsList/>
          </div>
        </div>
    </div>
  )
}

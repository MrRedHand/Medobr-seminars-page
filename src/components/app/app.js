import React, { useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Sidebar from '../sidebar/sidebar';
import SeminarsList from '../seminars-list/seminars-list';
import TrajectoryBanner from "../trajectory-banner/trajectory-banner";
import {fetchData} from "../../services/asyncActions/getFullData";
import {createStartData} from "../../services/asyncActions/createStartData";
import Header from "../header/header";

export default function App() {

  const dispatch = useDispatch()

  const {fullData, fullDataIsWritten} = useSelector(state => state.seminarsFiltration)


  //добываю все данные из апи и отправляю в редакс
  useEffect(() => {
    //redux-thunk - вызов вынесенной функции
    !fullDataIsWritten
    && dispatch(fetchData())

    //redux-thunk - вызов вынесенной функции
    fullDataIsWritten
    && dispatch(createStartData(fullData))

    console.log(fullDataIsWritten)

  }, [fullDataIsWritten])

  return (
      <>
          <Header/>
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
      </>
  )
}

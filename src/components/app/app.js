import React, { useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Sidebar from '../sidebar/sidebar';
import SeminarsList from '../seminars-list/seminars-list';
import TrajectoryBanner from "../trajectory-banner/trajectory-banner";
import {ADD_CATEGORIES_ARRAY, ADD_NMO_SMP_ARRAY, ADD_NMO_VMP_ARRAY} from "../../services/actions/seminarsFiltration";
import {seminarsFiltrationReducer} from "../../services/reducers/seminarsFiltration";

export default function App() {

  //const data = require('../../data/seminars999.json')

  const dataUrl = useSelector(state => state.seminarsFiltration.dataUrl)

  const fullData = useSelector(state => state.seminarsFiltration.fullDataJson)

  const dispatch = useDispatch()

  const filtersData = useSelector(state => state.createFilters)

  console.log('filtersData', filtersData)

  useEffect(() => {

    const getData = ()  => {
      fetch(dataUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(`Ошибка ${response.status}`);
        }
      })
      .then((data) => {
        console.log(data.data)
        dispatch({type})
        // setDataState({
        //     ...dataParams,
        //     dataReady : true,
        //     data : data.data
        // })
      })
      .catch((error) => {
        // setDataState({
        //     ...dataParams,
        //     dataReady : false,
        //     gotErrors : true
        //   })
        console.log(error)
      });
    }

    getData();

  }, [])

  let catsArray = []
  let nmoVmpSpecsArray = []
  let nmoSmpSpecsArray = []

  //Ищу все категории в джейсоне
  data.map(elem => {
      if (elem.categories !== null) {
          elem.categories.map(innerCat => {

            //слайс вместо пуша массива
            catsArray = [...catsArray, innerCat]
          })
      }
  })
    
    //Ищу все НМО-специальности ВМП
    data.map(elem => {
      if (elem.nmoSpecialties.length !== 0) {
        if (elem.nmoSpecialties.vmp != null && elem.nmoSpecialties.vmp.length !== 0) {
          elem.nmoSpecialties.vmp.map(innerElem => {
            //удаляю approvedStatus, чтобы не мешался
            delete innerElem.approvedStatus
            nmoVmpSpecsArray = [...nmoVmpSpecsArray, innerElem]
          })
        }

        if (elem.nmoSpecialties.smp != null && elem.nmoSpecialties.smp.length !== 0) {
          elem.nmoSpecialties.smp.map(innerElem => {
            //удаляю approvedStatus, чтобы не мешался
            delete innerElem.approvedStatus
            nmoSmpSpecsArray = [...nmoSmpSpecsArray, innerElem]
          })
        }
      }
    })

    //Удаляю все дубли категорий из массива
    catsArray = removeDoubles(catsArray)
    nmoVmpSpecsArray = removeDoubles(nmoVmpSpecsArray)
    nmoSmpSpecsArray = removeDoubles(nmoSmpSpecsArray)

    dispatch({type: 'ADD_CATEGORIES_ARRAY', payload: catsArray})
    dispatch({type: 'ADD_NMO_VMP_ARRAY', payload: nmoVmpSpecsArray})
    dispatch({type: 'ADD_NMO_SMP_ARRAY', payload: nmoSmpSpecsArray})

    //Метод удаления копий из массивов
    function removeDoubles(arr) {
      arr = arr.filter((value, index, self) =>
        index === self.findIndex((t) => (
          t.place === value.place && t.name === value.name
        ))
      )
      //Сортирую все по алфавиту в параметре name у каждого объекта массива
      return arr.sort((a,b) => {
        const x = a.name; const y = b.name;
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      })
    }

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

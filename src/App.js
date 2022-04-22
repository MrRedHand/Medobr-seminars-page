import React, { useState } from 'react';
import Sidebar from './components/sidebar/sidebar';
import SeminarsList from './components/SeminarsList';
import TrajectoryBanner from "./components/trajectory-banner/trajectory-banner";
import JsonFetch from "./components/JsonFetch";
import Modal from './components/Modal/Modal';

const jsonData = async = await JsonFetch()

console.log(jsonData)

const [current, setFilter] = useState({
  selectedCats : [],
  selectedTypes: [],
  selectedSpecs: [],
  selectedDates: []
})

let currentData;

const refreshFilter = (cats, types, specs, dates) => {
  setFilter({
    ...current,
  })


}

const funcTest = () => {
  console.log('тест передачи функции')
}

export default function App() {
  return (
    <div className="container seminars-list-page">
        <div className='row'>
          <div className='col-lg-3'>
              <Sidebar jsonData={jsonData} testFunc={funcTest}/>
          </div>
          <div className='col-lg-9'>
              <TrajectoryBanner />
              <SeminarsList jsonData={jsonData} />
          </div>
        </div>

        
    </div>
  )
}

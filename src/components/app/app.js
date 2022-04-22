import React, { useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import SeminarsList from '../seminars-list/seminars-list';
import TrajectoryBanner from "../trajectory-banner/trajectory-banner";

export default function App() {

  const jsonData  = require('../../data/seminars.json')

  console.log(jsonData)

  const tester = (name) => {
    console.log('Вывзвано', name)
  }

  return (
    <div className="container seminars-list-page">
        <div className='row'>
          <div className='col-lg-3'>
              <Sidebar jsonData={jsonData} testFunc={tester}/>
          </div>
          <div className='col-lg-9'>
              <TrajectoryBanner />
              <SeminarsList jsonData={jsonData} />
          </div>
        </div>
    </div>
  )
}

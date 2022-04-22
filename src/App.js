import React from 'react';
import Sidebar from './components/sidebar/sidebar';
import SeminarsList from './components/SeminarsList';
import TrajectoryBanner from "./components/trajectory-banner/trajectory-banner";
import JsonFetch from "./components/JsonFetch";
import Modal from './components/Modal/Modal';

const jsonData = async = await JsonFetch()

console.log(jsonData)

export default function App() {
  return (
    <div className="container seminars-list-page">
        <div className='row'>
          <div className='col-lg-3'>
              <Sidebar jsonData={jsonData}/>
          </div>
          <div className='col-lg-9'>
              <TrajectoryBanner />
              <SeminarsList jsonData={jsonData} />
          </div>
        </div>

        
    </div>
  )
}

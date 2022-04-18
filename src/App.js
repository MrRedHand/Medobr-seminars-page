import React from 'react';
import Sidebar from './components/Sidebar';
import SeminarsList from './components/SeminarsList';
import TrajectoryBanner from "./components/TrajectoryBanner";
import JsonFetch from "./components/JsonFetch";

const jsonData = JsonFetch()

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

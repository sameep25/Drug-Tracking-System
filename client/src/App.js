import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// IMPORT PAGES
import Doctor from 'Pages/Doctor'
import NewPrescription from "Pages/Doctor/NewPrescription"
import Prescription from "Pages/Prescription"
import DashBoard from "Pages/Doctor/DashBoard"
import PatientList from 'Pages/Doctor/PatientList'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/doctor' element={<Doctor />} >
            <Route path='new-prescription' element={<NewPrescription />} />
            <Route path='patient-list' element={<PatientList />} />
            <Route path='' element={<DashBoard />} />
          </Route>
          <Route path='prescription' element={<Prescription />} />
        </Routes>
      </Router>
      </>
  )
}

export default App
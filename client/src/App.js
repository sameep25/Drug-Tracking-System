import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// IMPORT PAGES
import Doctor from 'Pages/Doctor'
import Prescription from "Pages/Prescription"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/doctor' element={<Doctor />} >
            <Route path='new-prescription' element={<NewPrescription />} />

          </Route>
          <Route path='prescription' element={<Prescription />} />
        </Routes>
      </Router></>
  )
}

export default App
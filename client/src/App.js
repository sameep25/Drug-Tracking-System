import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// IMPORT PAGES
import Doctor from "Pages/Doctor";
import NewPrescription from "Pages/Doctor/NewPrescription";
import Prescription from "Pages/Prescription";
import DashBoardDoctor from "Pages/Doctor/DashBoardDoctor";
import DashBoardChemist from "Pages/Chemist/DashBoardChemist";
import PatientList from "Pages/Doctor/PatientList";
import Chemist from "Pages/Chemist";
import QrCodeScanner from "Pages/Chemist/QrCodeScanner";
import UpdatePrescription from "Pages/Chemist/UpdatePrescription";
import PrescriptionList from "Pages/Chemist/PrescriptionList"
import Scanner from "Pages/Chemist/Scanner"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/doctor" element={<Doctor />}>
            <Route path="new-prescription" element={<NewPrescription />} />
            <Route path="patient-list" element={<PatientList />} />
            <Route path="" element={<DashBoardDoctor />} />
            <Route path="prescription" element={<Prescription />} />
          </Route>

          <Route path="/chemist" element={<Chemist />}>
            <Route path="scan-qrcode" element={<QrCodeScanner />} />
            <Route path="prescription-list" element={<PrescriptionList />} />
            <Route path="" element={<DashBoardChemist />} />
            <Route
              path="update-prescription"
              element={<UpdatePrescription />}
            />
          </Route>

          <Route path="prescription" element={<Prescription />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// IMPORT PAGES
import Doctor from "Pages/Doctor";
import NewPrescription from "Pages/Doctor/NewPrescription";
import Prescription from "Pages/Prescription";
import DashBoard from "Pages/Doctor/DashBoard";
import PatientList from "Pages/Doctor/PatientList";
import Chemist from "Pages/Chemist";
import QrCodeScanner from "Pages/Chemist/QrCodeScanner";
import UpdatePrescription from "Pages/Chemist/UpdatePrescription";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/doctor" element={<Doctor />}>
            <Route path="new-prescription" element={<NewPrescription />} />
            <Route path="patient-list" element={<PatientList />} />
            <Route path="" element={<DashBoard />} />
            <Route path="prescription" element={<Prescription />} />
          </Route>

          <Route path="/chemist" element={<Chemist />}>
            <Route path="scan-qrcode" element={<QrCodeScanner />} />
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

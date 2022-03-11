import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// IMPORT PAGES
import Doctor from "Pages/Doctor";
import NewPrescription from "Pages/Doctor/NewPrescription";
import Prescription from "Pages/Prescription";
import DashBoardDoctor from "Pages/Doctor/DashBoardDoctor";
import PatientList from "Pages/Doctor/PatientList";
import Chemist from "Pages/Chemist";
import QrCodeScanner from "Pages/Chemist/QrCodeScanner";
import UpdatePrescription from "Pages/Chemist/UpdatePrescription";
import Manufacture from "Pages/Manufacture";
import ShipPackage from "Pages/Manufacture/ShipPackage";
import ReceivePackage from "Pages/Manufacture/ReceivePackage";
import Admin from "Pages/Admin"
import AdminDashboard from "Pages/Admin/Dashboard"
import ChemistProfile from "Pages/Chemist/Profile";
import ChemistPrescriptionList from "Pages/Chemist/PrescriptionList";
import DoctorList from "Pages/Admin/DoctorList";
import ChemistList from "Pages/Admin/ChemistList";
import DrugHistory from "Pages/DrugHistory";
import Verification from "Pages/Admin/Verification";
import DispenseDrug from "Pages/Chemist/DispenseDrug";

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
            <Route path="" element={<ChemistProfile />} />
            <Route path="dispense-drug" element={<DispenseDrug />} />
            <Route path="scan-qrcode" element={<QrCodeScanner />} />
            <Route path="update-prescription" element={<UpdatePrescription />} />
            <Route path="prescription-list" element={<ChemistPrescriptionList />} />
            <Route path="receive-package" element={<ReceivePackage />} />
            <Route path="logout" element={()=><></>} />
          </Route>

          {/* // TODO: Alot of work pending */}
          <Route path="/manufacture" element={<Manufacture />} >
            <Route path="ship-package" element={<ShipPackage />} />
            <Route path="receive-package" element={<ReceivePackage />} />
          </Route>

          <Route path="/admin" element={<Admin />} >
            <Route path="" element={<AdminDashboard />} />
            <Route path="doctors" element={<DoctorList />} />
            <Route path="chemists" element={<ChemistList />} />
            <Route path="verification" element={<Verification />} />
          </Route>

          <Route path="prescription" element={<Prescription />} />
          <Route path="drug-timeline" element={<DrugHistory />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

import React from 'react'
import { Outlet } from 'react-router-dom'
import { CgProfile, CgUserList, CgNotes } from 'react-icons/cg'
import Dashboard from 'Component/DashboardLayout';

const drawerItems = [
  {
    icon: <CgProfile size={20}/>,
    title: "Profile",
    path: "/doctor",
  },
  {
    icon: <CgNotes size={20}/>,
    title: "New Prescription",
    path: "/doctor/new-prescription",
  },
  {
    icon: <CgUserList size={20}/>,
    title: "Patient List",
    path: "/doctor/patient-list",
  },
  {
    icon: <CgUserList size={20}/>,
    title: "Prescription",
    path: "/doctor/prescription",
  },

];

const account = {
  displayName: 'Sameep Vishwakarma',
  email: 'contact@sameepvishwakarma.com',
  photoURL: 'https://m.media-amazon.com/images/I/41hmyB0fe2L._UXNaN_FMjpg_QL85_.jpg',
  role:"Neurologist"
};

const App = () => {
  return (
    <>
      <Dashboard sidebarConfig={drawerItems} account={account} >
        <Outlet />
      </Dashboard>
    </>
  )
}

export default App
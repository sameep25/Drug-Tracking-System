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

const App = () => {
  return (
    <>
      <Dashboard sidebarConfig={drawerItems}>
        <Outlet />
      </Dashboard>
    </>
  )
}

export default App
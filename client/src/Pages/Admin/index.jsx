import React from 'react'
import { Outlet } from 'react-router-dom'
import { CgProfile, CgUserList, CgNotes } from 'react-icons/cg'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import Dashboard from 'Component/DashboardLayout';

const drawerItems = [
  {
    icon: <MdOutlineSpaceDashboard size={20}/>,
    title: "Dashboard",
    path: "/admin",
  },
  {
    icon: <MdOutlineSpaceDashboard size={20}/>,
    title: "Verification Request",
    path: "/admin/verification",
  },
  {
    icon: <MdOutlineSpaceDashboard size={20}/>,
    title: "Chemist",
    path: "/admin/chemists",
  },
  {
    icon: <MdOutlineSpaceDashboard size={20}/>,
    title: "Doctor",
    path: "/admin/doctors",
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
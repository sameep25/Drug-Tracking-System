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

const account = {
  displayName: 'Sameep Vishwakarma',
  email: 'contact@sameepvishwakarma.com',
  photoURL: 'https://m.media-amazon.com/images/I/41hmyB0fe2L._UXNaN_FMjpg_QL85_.jpg',
  role:"NCB Ki Raid"
};

const App = () => {
  return (
    <>
      <Dashboard sidebarConfig={drawerItems} account={account}>
        <Outlet />
      </Dashboard>
    </>
  )
}

export default App
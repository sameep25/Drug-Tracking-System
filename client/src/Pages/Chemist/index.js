import React from "react";
import { Outlet } from "react-router-dom";
import { CgProfile, CgUserList, CgLogOut } from "react-icons/cg";
import Dashboard from "Component/DashboardLayout";
import QrCodeScanner from "./QrCodeScanner";
import { RiFolderReceivedLine } from 'react-icons/ri'


const drawerItems = [
  {
    element: <QrCodeScanner />
  },
  {
    icon: <CgProfile size={20} />,
    title: "Profile",
    path: "/chemist",
  },

  {
    icon: <CgUserList size={20} />,
    title: "Prescription List",
    path: "/chemist/prescription-list",
  },
  {
    icon: <RiFolderReceivedLine size={20} />,
    title: "Receive Package",
    path: "/chemist/receive-package",
  },
  {
    icon: <CgLogOut size={20} />,
    title: "Logout",
    path: "/chemist/logout",
  },
];

const account = {
  displayName: "Vasu Tiwari",
  email: "contact@vasutiwari.com",
  photoURL:
    "https://www.fortischennai.com/frontend/docimage/M-dtr-1554189149.png",
  role: "chemist",
};

const App = () => {
  return (
    <>
      <Dashboard sidebarConfig={drawerItems} account={account}>
        <Outlet />
      </Dashboard>
    </>
  );
};

export default App;

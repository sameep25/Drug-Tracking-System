import React from "react";
import { Outlet } from "react-router-dom";
import { CgProfile, CgUserList, CgNotes } from "react-icons/cg";
import Dashboard from "Component/DashboardLayout";

const drawerItems = [
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
];

const account = {
  displayName: "Vasu Tiwari",
  email: "contact@vasutiwari.com",
  photoURL:
    "https://m.media-amazon.com/images/I/41hmyB0fe2L._UXNaN_FMjpg_QL85_.jpg",
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

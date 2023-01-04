import Footer from "../Footer";
import Sidebar from "../Sidebar/Sidebar";
import React from "react";
import AdminNavbar from "./Header/Navbars/AdminNavbar";

function AdminLayouts({ children }) {
  return (
    <React.Fragment>
      <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        {/* <HeaderStats /> */}
        <div className="px-4 md:px-10 mx-auto w-full">
          {children}
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
    </React.Fragment>
  );
}

export default AdminLayouts;

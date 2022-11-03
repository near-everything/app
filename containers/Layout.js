import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen w-full px-2 overflow-y-scroll">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex flex-1 flex-col relative mb-16 rounded-b-3xl">
        {children}
        <Navbar />
      </div>
    </div>
  );
}

export default Layout;

import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <div className="flex h-screen w-full">
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
      <div className="flex-1 w-full">
        <main
          id="container"
          className="flex flex-col mx-auto h-full overflow-y-auto"
        >
          {children}
        </main>
        <Navbar />
      </div>
    </div>
  );
}

export default Layout;

import { useTheme } from "next-themes";
import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  const { theme } = useTheme();
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
        theme={theme}
      />
      <div className="flex-1 w-full">
        <main
          id="container"
          className="container mx-auto h-full overflow-y-auto"
        >
          {/* <Suspense fallback={<ThemedSuspense />}> */}
          {children}
          {/* </Suspense> */}
        </main>
        <Navbar />
      </div>
    </div>
  );
}

export default Layout;

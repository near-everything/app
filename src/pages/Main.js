import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Main() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <main className="h-full overflow-y-auto">
          <div className="container grid px-6 mx-auto">
            <Link to="/media">Start</Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Main;

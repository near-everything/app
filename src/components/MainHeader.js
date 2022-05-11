import React, { useContext } from "react";
import { MoonIcon, SunIcon } from "../icons";
import { DarkModeContext } from "./DarkMode";

function MainHeader() {
  const { mode, toggleMode } = useContext(DarkModeContext);
  return (
    <header className="z-40 py-4 shadow-bottom">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-green-600 dark:text-green-300">
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Theme toggler --> */}
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-green"
              onClick={toggleMode}
              aria-label="Toggle color mode"
            >
              {mode === "dark" ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default MainHeader;

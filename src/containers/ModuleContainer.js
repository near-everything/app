import React from "react";
import { Outlet } from "react-router-dom";

function ModuleContainer({ moduleName, moduleColor }) {
  return (
    <div className="flex flex-col h-full px-6 pb-6 pt-12">
      <p className={`font-bold text-6xl text-${moduleColor}-600 mb-2`}>
        {moduleName}
      </p>
      <Outlet />
    </div>
  );
}

export default ModuleContainer;

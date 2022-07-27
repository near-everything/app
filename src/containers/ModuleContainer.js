import React from "react";

function ModuleContainer({ moduleName, moduleColor, children }) {
  return (
    <div className="flex flex-col h-full px-6 pb-6 pt-12">
      <p className={`font-bold text-6xl text-${moduleColor}-600 mb-8`}>
        {moduleName}
      </p>
      {children}
    </div>
  );
}

export default ModuleContainer;

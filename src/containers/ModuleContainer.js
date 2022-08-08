import React from "react";

function ModuleContainer({ moduleName, moduleColor, children,description }) {
  return (
    <div className="flex flex-col h-full px-6 pb-6 pt-12">
      <div className="flex justify-between">
        <p className={`font-bold text-6xl text-${moduleColor}-600 mb-8`}>
          {moduleName}
        </p>
        {description && 
          <div className="tooltip tooltip-left" data-tip={description}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        }
      </div>
      {children}
    </div>
  );
}

export default ModuleContainer;

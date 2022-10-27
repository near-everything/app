import React from "react";

function CenteredContainer({ children }) {
  return (
    <div className="flex items-center min-h-screen p-6">
      <div className="flex-1 h-full max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CenteredContainer;

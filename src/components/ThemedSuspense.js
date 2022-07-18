import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

function ThemedSuspense() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <PulseLoader
        size={10}
        color={"#e5e7eb"}
        loading={true}
        speedMultiplier={1.5}
      />
    </div>
  );
}

export default ThemedSuspense;

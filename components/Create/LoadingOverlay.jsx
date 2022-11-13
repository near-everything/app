import { PulseLoader } from "react-spinners";

function LoadingOverlay() {
  return (
    <div className="absolute h-full w-full bg-white opacity-30 z-50">
      <div className="flex justify-center items-center h-full">
        <PulseLoader
          size={10}
          color={"#e5e7eb"}
          loading={true}
          speedMultiplier={1.5}
        />
      </div>
    </div>
  );
}

export default LoadingOverlay;

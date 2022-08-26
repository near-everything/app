import { PulseLoader } from "react-spinners";

function MediaGrid({ isLoading, isError, data, renderGridCard }) {
  return (
    <>
      {isLoading || isError ? (
        <div className="flex justify-center items-center h-full">
          <PulseLoader
            size={10}
            color={"#e5e7eb"}
            loading={isLoading}
            speedMultiplier={1.5}
          />
        </div>
      ) : (
        <div className="grid grid-cols-3">
          {data?.map((it) => renderGridCard(it))}
        </div>
      )}
    </>
  );
}

export default MediaGrid;

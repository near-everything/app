import { PulseLoader } from "react-spinners";
import { useInventory } from "../features/marketplace/marketplaceApi";
import ThingCard from "./ThingCard";

function MarketplaceGrid() {
  const { data, isLoading, isError } = useInventory();
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
        <div className="grid gap-2 grid-cols-2 m-2">
          {data?.map((thing) => {
            return <ThingCard key={thing.id} thingId={thing.id} />;
          })}
        </div>
      )}
    </>
  );
}

export default MarketplaceGrid;

import { useRouter } from "next/router";
import { useAuth } from "../../../context/AuthContext";
import { useThingsByOwner } from "../../../features/organize/organizeApi";
import MediaGrid from "../../MediaGrid";
import SquareImage from "../../SquareImage";

function ThingGrid() {
  const router = useRouter();
  const { user } = useAuth();
  const { data, isLoading, isError } = useThingsByOwner(user && user.uid, {
    enabled: !!user,
  });

  const renderThingCard = (thing) => {
    return (
      <div
        key={thing.node.id}
        className="cursor-pointer"
        onClick={(() => router.push(`/things/${thing.node.id}`))}
      >
        <SquareImage media={thing.node.media[0]} />
      </div>
    );
  };

  return (
    <>
      <MediaGrid
        data={data}
        isLoading={isLoading}
        isError={isError}
        renderGridCard={renderThingCard}
      />
    </>
  );
}

export default ThingGrid;

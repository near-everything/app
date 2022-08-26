import Link from "next/link";
import { useAuth } from "../../../context/AuthContext";
import { useThingsByOwner } from "../../../features/organize/organizeApi";
import MediaGrid from "../../MediaGrid";
import MediaGridCard from "../../MediaGridCard";

function ThingGrid() {
  const { user } = useAuth();
  const { data, isLoading, isError } = useThingsByOwner(user && user.uid, {
    enabled: !!user,
  });

  const renderThingCard = (thing) => {
    return (
      <div key={thing.node.id}>
        <Link href={`/things/${thing.node.id}`}>
          <MediaGridCard media={thing.node.media[0]} />
        </Link>
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

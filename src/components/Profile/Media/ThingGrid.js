import Link from "next/link";
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
        onClick={() => router.push(`/things/${thing.node.id}`)}
      >
        <SquareImage
          media={thing.node.medias?.edges[0]?.node.mediaUrl}
        />
      </div>
    );
  };

  return (
    <>
      {data?.length > 0 ? (
        <MediaGrid
          data={data}
          isLoading={isLoading}
          isError={isError}
          renderGridCard={renderThingCard}
        />
      ) : (
        <div className="flex flex-1 flex-col justify-center items-center text-sm">
          <p>no things found!</p>
          <Link href="/create/thing">
            <a className="text-blue-500">create one</a>
          </Link>
        </div>
      )}
    </>
  );
}

export default ThingGrid;

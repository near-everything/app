import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { useRequestsByRequester } from "../../../features/organize/organizeApi";
import MediaGrid from "../../MediaGrid";
import SquareImage from "../../SquareImage";

function RequestGrid() {
  const { user } = useUser();
  const { data, isLoading, isError } = useRequestsByRequester(
    user && user.uid,
    {
      enabled: !!user,
    }
  );

  const renderRequestCard = (request) => {
    return (
      <div key={request.node.id}>
        <Link href={`/requests/${request.node.id}`}>
          <SquareImage media={request.node.medias?.edges[0]?.node.mediaUrl} />
        </Link>
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
          renderGridCard={renderRequestCard}
        />
      ) : (
        <div className="flex flex-1 flex-col justify-center items-center text-sm">
          <p>no requests found!</p>
          <Link href="/create/request">
            <a className="text-blue-500">create one</a>
          </Link>
        </div>
      )}
    </>
  );
}

export default RequestGrid;

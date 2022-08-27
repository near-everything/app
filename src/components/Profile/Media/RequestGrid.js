import Link from "next/link";
import { useAuth } from "../../../context/AuthContext";
import { useRequestsByRequester } from "../../../features/organize/organizeApi";
import MediaGrid from "../../MediaGrid";
import SquareImage from "../../SquareImage";

function RequestGrid() {
  const { user } = useAuth();
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
          <SquareImage media={request.node.media[0]} />
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

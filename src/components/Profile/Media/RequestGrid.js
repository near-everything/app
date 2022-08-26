import Link from "next/link";
import { useAuth } from "../../../context/AuthContext";
import { useRequestsByRequester } from "../../../features/organize/organizeApi";
import MediaGrid from "../../MediaGrid";
import MediaGridCard from "../../MediaGridCard";

function RequestGrid() {
  const { user } = useAuth();
  const { data, isLoading, isError } = useRequestsByRequester(user && user.uid, {
    enabled: !!user,
  });

  const renderRequestCard = (request) => {
    return (
      <div key={request.node.id}>
        <Link href={`/requests/${request.node.id}`}>
          <MediaGridCard media={request.node.media[0]} />
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
        renderGridCard={renderRequestCard}
      />
    </>
  );
}

export default RequestGrid;

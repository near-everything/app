import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { usePostsByPoster } from "../../../features/organize/organizeApi";
import MediaGrid from "../../MediaGrid";
import SquareImage from "../../SquareImage";

function PostGrid() {
  const { user } = useUser();
  const { data, isLoading, isError } = usePostsByPoster(user && user.uid, {
    enabled: !!user,
  });

  const renderPostCard = (post) => {
    return (
      <div key={post.node.id}>
        <Link href={`/posts/${post.node.id}`}>
          <SquareImage media={post.node.medias?.edges[0]?.node.mediaUrl} />
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
          renderGridCard={renderPostCard}
        />
      ) : (
        <div className="flex flex-1 flex-col justify-center items-center text-sm">
          <p>no posts found!</p>
          <Link href="/create/post">
            <a className="text-blue-500">create one</a>
          </Link>
        </div>
      )}
    </>
  );
}

export default PostGrid;

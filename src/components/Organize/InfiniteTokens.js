import InfiniteScroll from "react-infinite-scroll-component";
import { PulseLoader } from "react-spinners";
import { useInfiniteTokens } from "../../features/organize/organizeApi";

function InfiniteTokens() {
  const { data, status, fetchNextPage, hasNextPage } = useInfiniteTokens();

  return (
    <>
      {status === "success" && (
        <InfiniteScroll
          dataLength={data?.pages.length * 10}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={
            <div className="flex w-full justify-center my-4">
              <PulseLoader
                size={10}
                color={"#e5e7eb"}
                loading={true}
                speedMultiplier={1.5}
              />
            </div>
          }
          scrollableTarget="container"
        >
          <div className="grid gap-4">
            {data?.pages.map((page) => (
              <>
                {page.edges?.map((it) => (
                  <div key={it.id}>{it.id}</div>
                ))}
              </>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
}

export default InfiniteTokens;

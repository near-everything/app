// import InfiniteScroll from "react-infinite-scroll-component";
// import { PulseLoader } from "react-spinners";
// import { useInfiniteThings } from "../../features/organize/organizeApi";
// import ThingCard from "../Cards/ThingCard";

// function InfiniteThings() {
//   const { data, status, fetchNextPage, hasNextPage } = useInfiniteThings();

//   return (
//     <>
//       {status === "success" && (
//         <InfiniteScroll
//           dataLength={data?.pages.length * 10}
//           next={fetchNextPage}
//           hasMore={hasNextPage}
//           loader={
//             <div className="flex w-full justify-center my-4">
//               <PulseLoader
//                 size={10}
//                 color={"#e5e7eb"}
//                 loading={true}
//                 speedMultiplier={1.5}
//               />
//             </div>
//           }
//           scrollableTarget="container"
//         >
//           <div className="grid gap-4">
//             {data?.pages.map((page) => (
//               <>
//                 {page.edges?.map((it) => (
//                   <div key={it.node.id}>
//                     <ThingCard thing={it.node} />
//                   </div>
//                 ))}
//               </>
//             ))}
//           </div>
//         </InfiniteScroll>
//       )}
//     </>
//   );
// }

// export default InfiniteThings;

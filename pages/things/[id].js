import { useRouter } from "next/router";
import { PulseLoader } from "react-spinners";
import Characteristic from "../../components/Characteristic";
import MediaDisplay from "../../components/Create/MediaDisplay";
import Layout from "../../containers/Layout";
import { useThingById } from "../../features/organize/organizeApi";

function Thing() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useThingById(parseInt(id));

  return (
    <>
      <div className="flex flex-col h-full px-6 pb-6 pt-12">
        <div className="flex justify-between">
          <p className="font-bold text-6xl mb-8">{`thing #${id}`}</p>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <PulseLoader
              size={10}
              color={"#e5e7eb"}
              loading={isLoading}
              speedMultiplier={1.5}
            />
          </div>
        ) : (
          <>
            <MediaDisplay media={data.medias.edges} setMedia={() => false} />
            <div className="grid grid-flow-col gap-2">
              {data.characteristics?.edges.map((char) => (
                <Characteristic key={char.node.attributeId} char={char.node} />
              ))}
            </div>
            <br />
          </>
        )}
      </div>
    </>
  );
}

export default Thing;

Thing.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

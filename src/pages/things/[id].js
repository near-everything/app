import { useRouter } from "next/router";
import Card from "../../components/Card";
import CardBody from "../../components/CardBody";
import ImageCard from "../../components/Cards/ImageCard";
import Characteristic from "../../components/Characteristic";
import Layout from "../../containers/Layout";
import ModuleContainer from "../../containers/ModuleContainer";
import { useThingById } from "../../features/organize/organizeApi";

function Thing() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useThingById(parseInt(id));

  return (
    <>
      <ModuleContainer moduleName={`thing #${id}`} moduleColor={"black"}>
        {isLoading ? (
          <>Loading</>
        ) : (
          <>
            <Card>
              <CardBody className="flex flex-col">
                <div className="flex flex-row gap-2 overflow-x-auto">
                  {data.media &&
                    data.media.map((url, index) => (
                      <div key={index} className="flex-shrink-0 w-48">
                        <ImageCard key={index} index={index} media={url} />
                      </div>
                    ))}
                </div>
                <div className="flex flex-col m-2">
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    {data.category.name}
                  </p>
                  <p className="mb-2 text-md font-medium text-gray-600 dark:text-gray-400">
                    {data.subcategory.name}
                  </p>
                </div>
                {data.characteristics?.edges.map((char) => (
                  <Characteristic
                    key={char.node.attributeId}
                    characteristic={char.node}
                  />
                ))}
                <br />
              </CardBody>
            </Card>
          </>
        )}
      </ModuleContainer>
    </>
  );
}

export default Thing;

Thing.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

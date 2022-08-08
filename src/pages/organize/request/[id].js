import { useRouter } from "next/router";
import Card from "../../../components/Card";
import CardBody from "../../../components/CardBody";
import ImageCard from "../../../components/Cards/ImageCard";
import Layout from "../../../containers/Layout";
import ModuleContainer from "../../../containers/ModuleContainer";
import {
  useRequestById
} from "../../../features/organize/organizeApi";

function Request() {
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, data } = useRequestById(parseInt(id));
  return (
    <>
      <ModuleContainer  moduleName={`request #${id}`} moduleColor={"black"}>
        {isLoading ? (
          <>Loading</>
        ) : (
          <>
            <Card>
              <CardBody className="flex flex-col">
                <div className="flex flex-row gap-2 overflow-x-auto">
                  <div className="flex-shrink-0 w-48">
                    <ImageCard media={data.media && data.media[0]} />
                  </div>
                </div>
                <div className="flex flex-col m-2">
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    {data.referenceLink}
                  </p>
                  <p className="mb-2 text-md font-medium text-gray-600 dark:text-gray-400">
                    {data.descritpion}
                  </p>
                </div>
                <br />
              </CardBody>
            </Card>
          </>
        )}
      </ModuleContainer>
    </>
  );
}

export default Request;

Request.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

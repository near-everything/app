import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CardBody from "../../components/CardBody";
import ImageCard from "../../components/Cards/ImageCard";
import Layout from "../../containers/Layout";
import ModuleContainer from "../../containers/ModuleContainer";
import { useThingById } from "../../features/organize/organizeApi";

function Thing() {
  const [showImages, setShowImages] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useThingById(parseInt(id));

  return (
    <>
      {/* <Suspense fallback={<ThemedSuspense />}> */}
      {isLoading ? (
        <>Loading</>
      ) : (
        <>
          <Card>
            <CardBody className="flex flex-col">
              <Button onClick={() => setShowImages(!showImages)}>
                {showImages ? "hide" : "show"} images
              </Button>
              {showImages ? (
                <>
                  {data.media &&
                    data.media.map((url, index) => (
                      <ImageCard key={index} index={index} media={url} />
                    ))}
                </>
              ) : null}
              <div className="flex flex-col m-2">
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  {data.category.name}
                </p>
                <p className="mb-2 text-md font-medium text-gray-600 dark:text-gray-400">
                  {data.subcategory.name}
                </p>
              </div>
              <br />
            </CardBody>
          </Card>
        </>
      )}
      {/* </Suspense> */}
    </>
  );
}

export default Thing;

Thing.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ModuleContainer moduleName={"thing"} moduleColor={"black"}>
        {page}
      </ModuleContainer>
    </Layout>
  );
};

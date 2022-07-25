import { Suspense, useState } from "react";
// import AttributeField from "../components/AttributeField";
import Button from "../components/Button";
import Card from "../components/Card";
import CardBody from "../components/CardBody";
import ImageCard from "../components/Cards/ImageCard";
import ThemedSuspense from "../components/ThemedSuspense";
import { useItemById } from "../features/organize/organizeApi";

function Item() {
  const [showImages, setShowImages] = useState(false);
  const { data, isLoading } = useItemById(parseInt(1));

  return (
    <>
      <Suspense fallback={<ThemedSuspense />}>
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
                  {data.characteristics.edges.map((char, index) => {
                    return (
                      <Suspense key={index}>
                        {/* <AttributeField
                      characteristic={char.node}
                      itemId={data.id}
                    /> */}
                      </Suspense>
                    );
                  })}
                </div>
                <br />
              </CardBody>
            </Card>
          </>
        )}
      </Suspense>
    </>
  );
}

export default Item;

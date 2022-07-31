import { useRouter } from "next/router";
import Button from "../Button";
import Card from "../Card";
import CardBody from "../CardBody";
import ImageCard from "./ImageCard";

function ThingCard({ thing }) {
  const router = useRouter();

  const viewThing = (id) => {
    router.push(`/organize/thing/${id}`);
  };
  return (
    <Card>
      <CardBody className="flex flex-col">
        <ImageCard media={thing.media[0]} />
        <div className="flex flex-col m-2">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {thing.subcategory.name}
          </p>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            {thing.category.name}
          </p>
          <div className="flex justify-end">
            <Button onClick={() => viewThing(thing.id)}>view</Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default ThingCard;

import { useRouter } from "next/router";
import Button from "../Button";
import Card from "../Card";
import CardBody from "../CardBody";
import ImageCard from "./ImageCard";

function ItemCard({ item }) {
  const router = useRouter();

  const viewItem = (id) => {
    router.push(`/organize/thing/${id}`);
  };
  return (
    <Card>
      <CardBody className="flex flex-col">
        <ImageCard media={item.media[0]} />
        <div className="flex flex-col m-2">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {item.subcategory.name}
          </p>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            {item.category.name}
          </p>
          <div className="flex justify-end">
            <Button onClick={() => viewItem(item.id)}>view</Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default ItemCard;

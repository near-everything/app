import { useRouter } from "next/router";
import Button from "../Button";
import Card from "../Card";
import CardBody from "../CardBody";
import ImageCard from "./ImageCard";

function RequestCard({ request }) {
  const router = useRouter();

  const viewRequest = (id) => {
    router.push(`/organize/request/${id}`);
  };
  return (
    <Card>
      <CardBody className="flex flex-col">
        <ImageCard media={request.media && request.media[0]} />
        <div className="flex flex-col m-2">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {request.referenceLink}
          </p>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            {request.description}
          </p>
          <div className="flex justify-end">
            <Button onClick={() => viewRequest(request.id)}>view</Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default RequestCard;

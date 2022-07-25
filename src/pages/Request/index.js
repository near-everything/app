import Link from "next/link";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import Media from "../../components/Media";
import Description from "../../components/Request/Description";
import ReferenceLink from "../../components/Request/ReferenceLink";
import { setMedia } from "../../features/request/requestSlice";

function RequestMain() {
  const media = useSelector((state) => state.request.media);

  return (
    <>
      <div className="flex flex-1 flex-col">
        <Media media={media} setMedia={setMedia} />
        <br />
        <div className="flex flex-col text-black">
          <div className="w-75 border-t-2 flex justify-end text-sm text-gray-400 pb-2">
            Optional
          </div>
          <ReferenceLink />
          <br />
          <Description />
        </div>
      </div>
      <div className="flex justify-self-end">
        <Link href="/review">
          <Button
            className="w-full h-16"
            disabled={media.length <= 0}
            onClick={handleSubmit}
          >
            Review
          </Button>
        </Link>
      </div>
    </>
  );
}

export default RequestMain;

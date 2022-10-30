import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Description from "./Description";
import MediaReel from "./MediaReel";

function CreateThingForm({
  showCamera,
  images,
  setImages,
  attributes,
  setAttributes,
}) {
  return (
    <>
      <div className="relative">
        <div id="create-media-reel">
          <MediaReel
            showCamera={showCamera}
            images={images}
            setImages={setImages}
            allowUpload={true}
            allowRemove={true}
          />
        </div>
        <div className="absolute bottom-4 left-4 z-50">
          <div className="flex justify-center items-center">
            <button
              className="btn btn-primary btn-circle text-gray-200 shadow-lg"
              onClick={showCamera}
            >
              <FontAwesomeIcon size="xl" icon={faCamera} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-4 px-2">
        <div className="flex flex-1 flex-col">
          <Description attributes={attributes} setAttributes={setAttributes} />
        </div>
      </div>
    </>
  );
}

export default CreateThingForm;

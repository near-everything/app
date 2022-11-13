import { useUser } from "@auth0/nextjs-auth0";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { BUCKET_URL } from "../../app/api";
import {
  useCreateMedia,
  useCreateThing,
} from "../../features/collect/collectApi";
import Description from "./../Description";
import MediaReel from "./../MediaReel";
import LoadingOverlay from "./LoadingOverlay";
import ShowCameraButton from "./ShowCameraButton";

function CreateThingForm({
  showCamera,
  images,
  setImages,
  attributes,
  setAttributes,
}) {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const createThing = useCreateThing();
  const createMedia = useCreateMedia();

  const handleSubmit = async () => {
    setLoading(true);
    createThing.mutate(
      {
        attributes: attributes
          ?.filter(
            (it) =>
              it.options?.value !== undefined && it.options?.value !== null
          )
          .map((attr) => {
            return {
              attributeId: parseInt(attr.value),
              optionId: attr.options.value,
            };
          }),
        ownerId: user.sub,
        privacyType: "PRIVATE",
      },
      {
        onSuccess: async (response) => {
          toast.success(
            `successfully created thing ${response.createThing.thing.id}`
          );
          await associateMedia(response.createThing.thing.id);
          setAttributes([]);
          setImages([]);
          setLoading(false);
        },
        onError: (err) => {
          toast.error("Error creating thing, please try again.");
          console.log(err.message);
          setLoading(false);
        },
      }
    );
  };

  const uploadFile = async (file, thingId) => {
    let { data } = await axios.post("/api/s3/uploadFile", {
      nickname: user.nickname,
      type: file.data.type,
      base64: file.base64 || false,
    });

    const url = data.url;
    await axios.put(url, file.base64 ? file.body : file.data, {
      headers: {
        "Content-Type": file.data.type,
        "Content-Encoding": file.base64 ? "base64" : null,
        "Access-Control-Allow-Origin": "*",
      },
    });

    createMedia.mutate(
      {
        mediaUrl: BUCKET_URL + data.name,
        thingId: thingId,
      },
      {
        onSuccess: async () => {
          toast.success("created media successfully");
        },
        onError: () => {
          toast.error("error creating media, please try again.");
        },
      }
    );
  };

  const associateMedia = async (thingId) => {
    for (const img of images) {
      await uploadFile(img, thingId);
    }
  };

  return (
    <>
      <div id="create-media-reel">
        <MediaReel
          images={images}
          setImages={setImages}
          allowUpload={!loading}
          allowRemove={!loading}
        />
        {loading ? null : <ShowCameraButton showCamera={showCamera} />}
      </div>
      <div className="flex flex-col flex-1 pt-4 px-2">
        <div className="flex flex-1 flex-col pb-64">
          <Description attributes={attributes} setAttributes={setAttributes} />
        </div>
      </div>
      <div className="absolute bottom-4 right-4 z-30">
        <button
          className="btn"
          onClick={handleSubmit}
          disabled={images.length < 1 || loading}
        >
          create new thing
        </button>
      </div>
      {loading ? <LoadingOverlay /> : null}
    </>
  );
}

export default CreateThingForm;

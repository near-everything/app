import { useUser } from "@auth0/nextjs-auth0";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { BUCKET_URL } from "../../app/api";
import { useCreateMedia, useCreateThing } from "../../features/collect/collectApi";
import Description from "./Description";
import MediaReel from "./MediaReel";

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
        privacyType: "PRIVATE"
      },
      {
        onSuccess: async (response) => {
          toast.success(
            `successfully created thing ${response.createThing.thing.id}`
          );
          await associateMedia(response.createThing.thing.id);
          // setAttributes([]);
          // setImages([]);
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
      name: file.data.name,
      type: file.data.type,
    });

    const url = data.url;
    await axios.put(url, file.data, {
      headers: {
        "Content-Type": file.data.type,
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
      <div className="relative">
        {loading ? <p>loading</p> : null}
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
          <div className="flex flex-1 flex-col items-center justify-center h-full p-16">
            <button className="btn" onClick={handleSubmit} disabled={images.length < 1 || loading}>
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateThingForm;

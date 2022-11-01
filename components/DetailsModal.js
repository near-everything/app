import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCreateMedia } from "../features/collect/collectApi";
import collapse from "../utils/collapse";
import MediaReel from "./Create/MediaReel";

const BUCKET_URL = "https://everything-1.s3.us-east-1.amazonaws.com/";

function DetailsModal({ thing }) {
  const [isEditEnabled, toggleEdit] = useState(false);
  const [images, setImages] = useState([]);
  const createMedia = useCreateMedia();

  useEffect(() => {
    if (thing.medias !== null && thing.medias !== undefined) {
      const isolatedUrls = collapse(thing.medias).map(
        (it) => (it = it.mediaUrl)
      );
      setImages(isolatedUrls);
    }
  }, [thing]);

  const uploadFile = async (file) => {
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
        thingId: thing.id,
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

  const uploadImages = async () => {
    for (const img of images) {
      await uploadFile(img);
    }
  };

  return (
    <>
      <input type="checkbox" id="thing-details" className="modal-toggle" />
      <label
        htmlFor="thing-details"
        className="modal modal-bottom sm:modal-middle cursor-pointer"
      >
        <label className="modal-box relative" htmlFor="">
          <label
            htmlFor="thing-details"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex flex-col justify-between">
            <div className="h-96 my-8">
              <MediaReel
                images={images}
                setImages={setImages}
                allowUpload={isEditEnabled}
                allowRemove={isEditEnabled}
              />
            </div>
            <div className="grid gap-2">
              {thing.characteristics?.edges.map((char, index) => (
                <div className="flex flex-row w-full" key={index}>
                  <div className="w-32">
                    <span className="font-semibold">
                      {char.node.attribute.name}
                    </span>{" "}
                  </div>
                  <div className="flex flex-1 leading-5">
                    {/* <div className="divide-y" /> */}
                    {/* this may have to be per component, give them their own state and mutation */}
                    {isEditEnabled ? (
                      <>
                        <div className="flex flex-row w-full">
                          <input
                            className="input input-xs flex-1"
                            placeholder={char.node.option.value}
                          />
                          <span className="px-2">
                            <button className="btn btn-ghost btn-xs">
                              {/* <CheckmarkIcon /> */}
                              edit
                            </button>
                            <button className="btn btn-ghost btn-xs">
                              {/* <CheckmarkIcon /> */}
                              delete
                            </button>
                          </span>
                        </div>
                      </>
                    ) : (
                      <>{char.node.option.value}</>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-flow-col gap-2 mt-4">
              <button
                className="btn"
                onClick={() => toggleEdit(!isEditEnabled)}
              >
                Edit
              </button>
              <button className="btn">Delete</button>
              <div className="">
                <button className="btn w-full" onClick={() => uploadImages()}>
                  upload
                </button>
              </div>
            </div>
          </div>
        </label>
      </label>
    </>
  );
}

export default DetailsModal;

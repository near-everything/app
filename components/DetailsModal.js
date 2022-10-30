import { useState } from "react";
import MediaReel from "./Create/MediaReel";

function DetailsModal({ thing }) {
  const [isEditEnabled, toggleEdit] = useState(false);
  const [images, setImages] = useState([]);

  return (
    <>
      <input type="checkbox" id="thing-details" className="modal-toggle" />
      <label
        htmlFor="thing-details"
        className="modal modal-bottom sm:modal-middle cursor-pointer"
      >
        <label className="modal-box relative" htmlFor="">
        <label htmlFor="thing-details" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className="flex flex-col justify-between">
            <div className="h-96 my-8">
              <MediaReel images={images} setImages={setImages}  allowUpload={isEditEnabled} allowRemove={isEditEnabled} />
            </div>
            <div className="grid gap-2">
              {thing.characteristics?.edges.map((char) => (
                <>
                  <div className="flex flex-row w-full">
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
                              <button className="btn btn-ghost btn-xs">
                                {/* <CheckmarkIcon /> */}
                                upload
                              </button>
                            </span>
                          </div>
                        </>
                      ) : (
                        <>{char.node.option.value}</>
                      )}
                    </div>
                  </div>
                </>
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
            </div>
          </div>
        </label>
      </label>
    </>
  );
}

export default DetailsModal;

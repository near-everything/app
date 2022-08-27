import { useEffect, useState } from "react";
import RemoveableMedia from "../RemoveableMedia";
import RequestDragAndDrop from "./RequestDragAndDrop";

function NewThingMedia({ media, setMedia }) {
  const [files, setFiles] = useState([...media]);

  useEffect(() => {
    return setMedia(files);
  }, [files, setMedia]);

  const removeFile = (index) => {
    setFiles((old) => {
      return old.filter((value, i) => i !== index);
    });
  };

  const featureImage = (index) => {
    const i = index + 1;
    const filesCopy = [...files];
    [filesCopy[0], filesCopy[i]] = [filesCopy[i], filesCopy[0]];
    setFiles(filesCopy);
  };

  return (
    <>
      <div className="m-4">
        {files.length > 0 ? (
          <>
            <RemoveableMedia
              media={files[0].url}
              index={0}
              removeMedia={removeFile}
            />
            <div className="flex flex-row gap-2 overflow-x-auto my-2">
              <div className="w-48">
                <RequestDragAndDrop media={files} setMedia={setFiles} />
              </div>
              <div className="flex flex-row gap-2">
                {files.slice(1).map((file, index) => (
                  <>
                    <div className="w-48">
                      <RemoveableMedia
                        media={file.url}
                        index={index}
                        removeMedia={(i) => removeFile(i + 1)}
                        featureMedia={featureImage}
                      />
                    </div>
                  </>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="h-full">
            <RequestDragAndDrop media={files} setMedia={setFiles} />
          </div>
        )}
      </div>
    </>
  );
}

export default NewThingMedia;

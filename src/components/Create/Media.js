import { useEffect, useState } from "react";
import MediaUpload from "../MediaUpload";
import RemoveableMedia from "../RemoveableMedia";

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
                <MediaUpload
                  onChange={(event) => {
                    if (event.target.files.length > 0) {
                      const urls = Array.from(event.target.files).map(
                        (file) => ({
                          data: file,
                          url: URL.createObjectURL(file),
                        })
                      );
                      setFiles([...files, ...urls]);
                      event.target.value = null;
                    }
                  }}
                />
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
          <div className="h-96">
            <MediaUpload
              onChange={(event) => {
                if (event.target.files.length > 0) {
                  const urls = Array.from(event.target.files).map((file) => ({
                    data: file,
                    url: URL.createObjectURL(file),
                  }));
                  setFiles([...files, ...urls]);
                  event.target.value = null;
                }
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default NewThingMedia;

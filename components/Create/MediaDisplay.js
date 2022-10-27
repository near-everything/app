import { useState } from "react";
import SquareImage from "../SquareImage";

function MediaDisplay({ media }) {
  const [files, setFiles] = useState([...media]);

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
            <div>
              <SquareImage media={files[0]?.node.mediaUrl} />
            </div>
            <div className="flex flex-row gap-2 overflow-x-auto my-2">
              <div className="flex flex-row gap-2">
                {files.slice(1).map((file, index) => (
                  <>
                    <div className="w-48">
                      <div onClick={() => featureImage(index)}>
                        <SquareImage media={file.node.mediaUrl} />
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default MediaDisplay;

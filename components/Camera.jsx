import Image from "next/image";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import Webcam from "react-webcam";
import Layout from "../containers/Layout";

function Camera({ hideCamera, images, setImages }) {
  const [facingMode, setFacingMode] = useState({ exact: "environment" });
  const [imageSrc, setImageSrc] = useState(null);
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  }, [webcamRef]);

  useEffect(() => {
    if (imageSrc !== null) {
      setImages([...images, imageSrc]);
    }
  }, [imageSrc]);

  const videoConstraints = {
    facingMode: facingMode,
  };

  const swapFacingMode = () => {
    setFacingMode(facingMode === "user" ? { exact: "environment" } : "user");
  };

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        mirrored
        videoConstraints={videoConstraints}
      />
      <div className="flex flex-1 mb-16 relative">
        <div className="w-full absolute bottom-0">
          <div className="flex flex-row justify-between">
            <div
              className="flex justify-center items-center w-1/3"
              onClick={swapFacingMode}
            >
              swap
            </div>
            <div className="flex justify-center items-center w-1/3">
              <button
                className="w-16 h-16 rounded-full border-secondary hover:bg-secondary border-4 disabled:bg-secondary"
                onClick={capture}
                disabled={images.length > 5}
              ></button>
            </div>
            <div className="flex justify-center items-center w-1/3">
              <div onClick={hideCamera}>
                {images.length > 0 ? (
                  <>
                    <div className="relative w-full h-full">
                      {images.map((imgSrc, index) => (
                        <>
                          <div className={`absolute left-${1 + index * 2}`}>
                            <div className={`w-16 h-16`}>
                              <Image
                                src={imgSrc}
                                alt=""
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </>
                ) : (
                  <>upload</>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Camera;

Camera.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

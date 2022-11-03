import {
  faArrowUpFromBracket,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import Layout from "../containers/Layout";

const imagePositions = [
  "left-1",
  "left-3",
  "left-5",
  "left-7",
  "left-9",
  "left-11",
];

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
  }, [imageSrc, images, setImages]);

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
      <div className="relative h-full">
        <div className="w-full absolute bottom-8">
          <div className="flex flex-row justify-center">
            <div
              className="flex justify-center items-center cursor-pointer"
              onClick={swapFacingMode}
            >
              <FontAwesomeIcon size="xl" icon={faRotate} />
            </div>
            <div className="flex justify-center items-center w-1/3">
              <button
                className="w-16 h-16 rounded-full border-primary hover:bg-primary border-4 disabled:bg-primary"
                onClick={capture}
                disabled={images.length > 5}
              ></button>
            </div>
            <div
              className="flex justify-center items-center relative w-6"
              onClick={hideCamera}
            >
              {images.length > 0 ? (
                <div className="relative w-full h-full cursor-pointer">
                  {images.map((imgSrc, index) => (
                    <div
                      className={`absolute ${imagePositions[index]}`}
                      key={index}
                    >
                      <div className={"w-16 h-16"}>
                        <Image
                          src={imgSrc}
                          alt=""
                          layout="fill"
                          objectFit="cover"
                          className="shadow-xl rounded-lg"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="cursor-pointer">
                  <FontAwesomeIcon size="xl" icon={faArrowUpFromBracket} />
                </div>
              )}
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

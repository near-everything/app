import { useRef, useState } from "react";
import Webcam from "react-webcam";
import Layout from "../../containers/Layout";
import CameraOverlay from "./CameraOverlay";

function Camera({ hideCamera, images, setImages }) {
  const [facingMode, setFacingMode] = useState({ exact: "environment" });
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const base64Data = new Buffer.from(
      imageSrc.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    );
    const file = {
      data: {
        type: "image/jpeg"
      },
      base64: true,
      body: base64Data,
      url: imageSrc
    };
    setImages([...images, file]);
  };

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
        videoConstraints={videoConstraints}
        screenshotFormat="image/jpeg"
      />
      <CameraOverlay
        swapFacingMode={swapFacingMode}
        capture={capture}
        hideCamera={hideCamera}
        images={images}
      />
    </>
  );
}

export default Camera;

Camera.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

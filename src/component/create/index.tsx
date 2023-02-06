import React, { useCallback, useRef, useState, useEffect } from "react";
import { ReactComponent as Arrow } from "assets/icon/close.svg";
import { ReactComponent as Gallery } from "assets/icon/gallery.svg";
import { Secondarywhite } from "component/shared/btn";
import { MediaOnboardingDialog } from "component/shared/mediaonboardingdialog";
import Webcam from "react-webcam";

type Props = {};
const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";
function Index({}: Props) {
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);
  const [facingMode, setFacingMode] = React.useState(FACING_MODE_USER);

  let videoConstraints: MediaTrackConstraints = {
    facingMode: facingMode,
    width: 270,
    height: 480,
  };

  const handleClick = React.useCallback(() => {
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT
        : FACING_MODE_USER
    );
  }, []);

  return (
    <div className=" bg-black  h-full">
      <MediaOnboardingDialog />
      <div className=" flex items-center justify-start pt-[6px] pl-[16px]">
        <div className=" bg-white20 rounded-[50%] p-[14px]  cursor-pointer">
          <Arrow className="text-white" />
        </div>
      </div>

      <div className=" mt-[16px] bg-white20  w-[97%] h-[60%]  rounded-[24px] mx-auto overflow-hidden">
        {url ? (
          <img src={url} alt="Screenshot" />
        ) : (
          <Webcam
            audio={false}
            width={"100%"}
            height={"100%"}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        )}
      </div>
      <div className=" absolute bottom-[30px] left-0 right-[-16px]  flex items-center justify-between w-[85%] mx-auto">
        <div className=" p-[15px] rounded-[50%] bg-white20 text-white flex items-center justify-center cursor-pointer">
          <Gallery />
        </div>
        <div
          className=" w-[64px] h-[64px] rounded-[50%] bg-white cursor-pointer"
          onClick={capture}
        />
        <Secondarywhite
          size="L"
          type="button"
          disabled={false}
          className="py-[16px] px-[24px]"
        >
          <p className="text-Button16">upload</p>
        </Secondarywhite>
      </div>
    </div>
  );
}

export default Index;

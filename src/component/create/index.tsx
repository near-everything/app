import React, { useCallback, useRef, useState, useEffect } from "react";
import { ReactComponent as Arrow } from "assets/icon/close.svg";
import { ReactComponent as Gallery } from "assets/icon/gallery.svg";
import { ReactComponent as Brightness } from "assets/icon/brightness.svg";
import { Secondarywhite } from "component/shared/btn";
import { MediaOnboardingDialog } from "component/shared/mediaonboardingdialog";
import Webcam from "react-webcam";
import Toggel from "component/shared/toggel";
type Props = {};
const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";
function Index({}: Props) {
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [bulk, setBulk] = useState<boolean>(false);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);
  const [facingMode, setFacingMode] = React.useState(FACING_MODE_USER);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  let videoConstraints: MediaTrackConstraints = {
    facingMode: facingMode,
    width: (97 * windowSize.current[0]) / 100,
    height: bulk
      ? (60 * windowSize.current[1]) / 100
      : (75 * windowSize.current[1]) / 100,
  };
  const handleClick = React.useCallback(() => {
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT
        : FACING_MODE_USER
    );
  }, []);
  const [brightnes, setBrightnes] = useState(1);
  return (
    <div
      className={
        url
          ? " h-full bg-[#0D0D0D80] backdrop-blur-[12px]"
          : " bg-black  h-full"
      }
    >
      <div className=" flex items-center justify-between pt-[6px] px-[16px]">
        <div className=" bg-white20 rounded-[50%] p-[14px]  cursor-pointer">
          <Arrow className="text-white" />
        </div>
        <Toggel text="bulk upload" setBulk={setBulk} bulk={bulk} />
      </div>

      <div
        className={
          bulk
            ? " mt-[16px] bg-white20  w-[97%] h-[60%]  rounded-[24px] mx-auto overflow-hidden relative"
            : " mt-[16px] bg-white20  w-[97%] h-[75%]  rounded-[24px] mx-auto overflow-hidden relative"
        }
      >
        <MediaOnboardingDialog />
        {url ? (
          <img
            src={url}
            alt="Screenshot"
            style={{ filter: `brightness(${brightnes})` }}
          />
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
        {url && (
          <Brightness
            className=" absolute top-[50%] left-[50%] -translate-x-center -translate-y-center"
            onClick={() => setBrightnes((perv) => perv + 0.1)}
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

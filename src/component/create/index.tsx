import React, { useCallback, useRef, useState, useEffect } from "react";
import { ReactComponent as Gallery } from "assets/icon/gallery.svg";
import { ReactComponent as Brightness } from "assets/icon/brightness.svg";
import { Secondarywhite } from "component/shared/btn";
import { MediaOnboardingDialog } from "component/shared/mediaonboardingdialog";
import Webcam from "react-webcam";
import Header from "./header";
import Body from "./body";
import Logout from "./logout";
import Template from "component/template";
import { Info, Uploadpart, Bulkpart,Bodyanimation } from "./animations";

type Props = {};
const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";
function Index({}: Props) {
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [photo, setPhoto] = useState<boolean>(false);
  const [list, setList] = useState<string[]>([]);
  const [bulk, setBulk] = useState<boolean>(false);
  const [close, setClose] = useState<boolean>(false);
  const [brightnes, setBrightnes] = useState<number>(1);
  const [upload, setUpload] = useState<boolean>(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setPhoto(true);
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);
  useEffect(() => {
    if (photo && bulk && url) {
      setList((perv) => [...perv, url]);
      setPhoto(false);
    }
  }, [photo]);

  const [facingMode, setFacingMode] = React.useState(FACING_MODE_USER);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  let videoConstraints: MediaTrackConstraints = {
    facingMode: facingMode,
    width: (97 * windowSize.current[0]) / 100,
    height: bulk
      ? (60 * windowSize.current[1]) / 100
      : (75 * windowSize.current[1]) / 100,
  };
  const handleUpload = () => {
    setUpload(true);
  };
  return (
    <div
      className={
        close
          ? " bg-[#0D0D0D99] h-full backdrop-blur-[10px] relative"
          : url
          ? " h-full bg-[#0D0D0D80] backdrop-blur-[12px] relative"
          : " bg-black  h-full relative"
      }
    >
      <Header setBulk={setBulk} bulk={bulk} setClose={setClose} />

      <div
        className={
          bulk
            ? " mt-[16px] bg-white20  w-[97%] h-[60%]  rounded-[24px] mx-auto overflow-hidden relative"
            : " mt-[16px] bg-white20  w-[97%] h-[75%]  rounded-[24px] mx-auto overflow-hidden relative"
        }
      >
        <MediaOnboardingDialog />
        {url && !bulk ? (
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
            mirrored
          />
        )}
        {url && (
          <Brightness
            className=" absolute top-[50%] left-[50%] -translate-x-center -translate-y-center"
            onClick={() => setBrightnes((perv) => perv + 0.1)}
          />
        )}
      </div>
      {upload && (
        <Bodyanimation>
          <Template list={list} />
        </Bodyanimation>
      )}
      {upload ? (
        <>
          <Bulkpart>
            <>{bulk && <Body list={list} />}</>
          </Bulkpart>
          <Uploadpart>
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
                onClick={handleUpload}
              >
                <p className="text-Button16">upload</p>
              </Secondarywhite>
            </div>
          </Uploadpart>
        </>
      ) : (
        <>
          {bulk && <Body list={list} />}
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
              onClick={handleUpload}
            >
              <p className="text-Button16">upload</p>
            </Secondarywhite>
          </div>
        </>
      )}

      {close ? (
        <Info>
          <Logout setClose={setClose} />
        </Info>
      ) : null}
    </div>
  );
}

export default Index;

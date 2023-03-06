import { MediaOnboardingDialog } from "component/shared/mediaonboardingdialog";
import Template from "component/template";
import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { Bodyanimation, Bulkpart, Info, Uploadpart } from "./animations";
import Body from "./body";
import Footer from "./footer";
import Header from "./header";
import Logout from "./logout";

type Props = {};
const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

function Index({}: Props) {
  const webcamRef = useRef<Webcam>(null);
  const [facingMode, setFacingMode] = useState(FACING_MODE_USER);

  const [url, setUrl] = useState<string | null>(null);
  const [list, setList] = useState<string[]>([]);
  const [bulk, setBulk] = useState<boolean>(false);
  const [close, setClose] = useState<boolean>(false);
  const [upload, setUpload] = useState<boolean>(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setList((prev) => [...prev, imageSrc]);
    }
  }, [webcamRef]);

  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  let videoConstraints: MediaTrackConstraints = {
    facingMode: facingMode,
    width: windowSize.current[0],
    height: (75 * windowSize.current[1]) / 100,
  };

  const handleUpload = () => {
    if (list.length !== 0) {
      setUpload(true);
    }
  };

  const removeImage = (id: number) => {
    setList(list.filter((value: string, i: number) => i !== id));
  };

  return (
    <>
      {upload ? (
        <Template
          url={url}
          list={list}
          bulk={bulk}
          setClose={setUpload}
          setUrl={setUrl}
          removeImage={removeImage}
        />
      ) : (
        <div className={"bg-black h-full flex flex-col justify-between"}>
          <Header setBulk={setBulk} bulk={bulk} setClose={setClose} />
          <div
            className={
              "bg-white20 w-[97%] flex grow rounded-[24px] mx-auto overflow-hidden relative"
            }
          >
            <MediaOnboardingDialog />
            <div className="absolute">
              <Webcam
                audio={false}
                width={"100%"}
                height={"100%"}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                mirrored
              />
            </div>
          </div>
          <Body list={list} bulk={bulk} removeImage={removeImage} />
          <Footer capture={capture} handleUpload={handleUpload} />

          {close ? (
            <Info>
              <Logout setClose={setClose} />
            </Info>
          ) : null}
        </div>
      )}
    </>
  );
}

export default Index;

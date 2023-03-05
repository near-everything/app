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
  const [photo, setPhoto] = useState<boolean>(false);
  const [list, setList] = useState<string[]>([]);
  const [bulk, setBulk] = useState<boolean>(false);
  const [close, setClose] = useState<boolean>(false);
  const [upload, setUpload] = useState<boolean>(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setPhoto(true);
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);

  useEffect(() => {
    if (photo && url) {
      setList((perv) => [...perv, url]);
      setPhoto(false);
    }
  }, [photo]);

  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  let videoConstraints: MediaTrackConstraints = {
    facingMode: facingMode,
    width: (97 * windowSize.current[0]) / 100,
    height: bulk // This doesn't need to change 
      ? (60 * windowSize.current[1]) / 100
      : (75 * windowSize.current[1]) / 100,
  };
  const handleUpload = () => {
    if (list.length !== 0) {
      setUpload(true);
    }
  };
  console.log("url", url);
  return (
    <div className={"bg-black h-full relative"}>
      <Header setBulk={setBulk} bulk={bulk} setClose={setClose} />
      <div
        className={
          "mt-[16px] bg-white20 w-[97%] h-[60%] rounded-[24px] mx-auto overflow-hidden relative"
        }
      >
        <MediaOnboardingDialog />
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
      <Body list={list} bulk={bulk} />
      <Footer capture={capture} handleUpload={handleUpload} />
      {upload && (
        <Bodyanimation>
          <Template
            url={url}
            list={list}
            bulk={bulk}
            setClose={setUpload}
            setUrl={setUrl}
          />
        </Bodyanimation>
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

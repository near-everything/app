import React, { useCallback, useRef, useState, useEffect } from "react";
import { ReactComponent as Arrow } from "assets/icon/close.svg";
import { ReactComponent as Gallery } from "assets/icon/gallery.svg";
import { Secondarywhite } from "component/shared/btn";
import { MediaOnboardingDialog } from "component/shared/mediaonboardingdialog";

type Props = {};

function Index({}: Props) {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  useEffect(() => {
    getVideo();
  }, [videoRef]);
  const getVideo = async () => {
    await navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 1920,
          height: 1080,
        },
      })
      .then((stream) => {
        let video = document.createElement("video");
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const takePhoto = () => {
    const width = 414;
    const height = width / (16 / 9);
    let video = videoRef.current;
    let photo = photoRef.current;
    // photo.width = width;
    // photo.height = height;
  };
  return (
    <div className=" bg-black  h-full">
      <MediaOnboardingDialog />
      <div className=" flex items-center justify-start pt-[6px] pl-[16px]">
        <div className=" bg-white20 rounded-[50%] p-[14px]  cursor-pointer">
          <Arrow className="text-white" />
        </div>
      </div>

      <div className=" mt-[16px] bg-white20  w-[97%] h-[60%]  rounded-[24px] mx-auto">
        <Mirror></Mirror>
      </div>
      <div className=" absolute bottom-[30px] left-0 right-[-16px]  flex items-center justify-between w-[85%] mx-auto">
        <div className=" p-[15px] rounded-[50%] bg-white20 text-white flex items-center justify-center cursor-pointer">
          <Gallery />
        </div>
        <div className=" w-[64px] h-[64px] rounded-[50%] bg-white cursor-pointer"></div>
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
interface State {}
class Mirror extends React.Component<Props, State> {
  video_reference: HTMLVideoElement | null = null;
  set_video_reference = (element: HTMLVideoElement) => {
    this.video_reference = element;
  };
  async componentDidMount() {
    if (this.video_reference) {
      let video_stream: MediaStream = await navigator.mediaDevices.getUserMedia(
        { video: { facingMode: "user" }, audio: false }
      );
      this.video_reference.srcObject = video_stream;
    }
  }
  render() {
    return <video ref={this.set_video_reference} id="player" autoPlay></video>;
  }
}

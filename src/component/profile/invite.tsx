import React, { useState } from "react";
import { MainBtn } from "component/shared/btn";
import { ReactComponent as Arrow } from "assets/icon/close.svg";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import Sharepart from "./sharepart";
type Props = {
  setClose: (close: string) => void;
};

const Invite = ({ setClose }: Props) => {
  const [share, setShare] = useState(false);
  return (
    <div className=" bg-[#0D0D0D99] backdrop-blur-[10px] h-full w-full relative z-10 overflow-hidden">
      {share ? (
        <div className="bg-gray-95 absolute bottom-0 right-0 left-0 h-[50%] rounded-t-[24px] border-solid border border-gray-90 flex flex-col items-start justify-start">
          <Sharepart setShare={setShare} />
        </div>
      ) : (
        <div className=" bg-gray-95 absolute bottom-0 right-0 left-0 h-[30%] rounded-t-[24px] border-solid border border-gray-90 flex flex-col items-start justify-start">
          <div className=" flex items-center justify-between w-full mt-[23px]">
            <p className=" text-title28  ml-[16px]  ">invite friends</p>
            <div
              className=" bg-white20 rounded-[50%] p-[14px] mr-[16px]"
              onClick={() => setClose("")}
            >
              <Arrow className="text-white" />
            </div>
          </div>

          <pre className=" text-gray-40 text-Body16 ml-[12px]">
            {"the new economy can't built itself!" +
              "\n" +
              "invite your friends to everything"}
          </pre>
          <MainBtn
            size="L"
            disabled={false}
            type="button"
            className=" w-full mt-[16px] mx-auto"
            onClick={() => setShare(true)}
          >
            <p>share link</p>
          </MainBtn>
        </div>
      )}
    </div>
  );
};

export default Invite;

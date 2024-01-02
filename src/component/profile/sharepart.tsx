import React from "react";
import { ReactComponent as Arrow } from "assets/icon/close.svg";
import { ReactComponent as Figma } from "assets/icon/profile/figma.svg";
import { ReactComponent as Airdrop } from "assets/icon/profile/share/airdrop.svg";
import { ReactComponent as Firstlast } from "assets/icon/profile/share/firstlast.svg";
import { ReactComponent as Appicon } from "assets/icon/profile/share/appicon.svg";
import { ReactComponent as Copy } from "assets/icon/profile/share/copy.svg";
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
} from "react-share";
import UseCopyToClipboard from "component/shared/copytoclipoard";
type Props = {
  setShare: (close: boolean) => void;
};

function Sharepart({ setShare }: Props) {
  const shareUrl = "https://www.pakkamarwadi.tk/";
  const [isCopied, handleCopy] = UseCopyToClipboard(3000);
  const handleClick = () => {
    // handleCopy("test");
  };
  return (
    <>
      <div className=" flex items-center justify-between p-[15px] w-full">
        <div className=" flex items-center justify-start">
          <div className=" bg-[#2C2C2E] p-[10px] rounded-[0.9px] shadow-box">
            <Figma />
          </div>
          <div className=" flex flex-col items-start justify-start ml-[15px]">
            <p className=" text-[15px] font-semibold leading-[20px]">
              Join me on everything!
            </p>
            <p className=" text-[#EBEBF599] text-[12.5px] font-normal leading-[17px]">
              figma.com
            </p>
          </div>
        </div>
        <div
          className=" bg-white20 rounded-[50%] p-[9px] "
          onClick={() => setShare(false)}
        >
          <Arrow className="text-white" />
        </div>
      </div>
      <div className=" w-full h-[0.48px] bg-[#545458A6] opacity-[0.5] mb-[19.23px]" />
      <div className=" flex items-start justify-start ml-[15.38px] overflow-auto w-full mb-[14.87px]">
        {list.map((item, id) => (
          <div
            key={id}
            className="mr-[17px] flex flex-col items-center justify-center"
          >
            <div
              className={
                item?.num
                  ? "w-[60.58px] h-[60.58px] rounded-[50%] overflow-hidden"
                  : ""
              }
            >
              {item?.icon}
            </div>
            <p
              className={
                item?.num
                  ? "font-normal text-[10.57px] leading-[12px] mt-[6.58px]"
                  : " font-normal text-[10.57px] leading-[12px] mt-[8px]"
              }
            >
              {item?.name}
            </p>
            <p className=" text-[#EBEBF599] font-normal text-[10.57px] mt-[3.58px] leading-[12px]">
              {item?.num}
            </p>
          </div>
        ))}
      </div>
      <div className=" w-full h-[0.48px] bg-[#545458A6] opacity-[0.5] mb-[19.23px]" />
      <div className=" w-full px-[15px] grid grid-cols-4 items-start justify-start">
        <div>
          <FacebookShareButton
            url={shareUrl}
            quote={"Title or jo bhi aapko likhna ho"}
            hashtag={"#portfolio..."}
          >
            <FacebookIcon size={"57px"} style={{ borderRadius: "12.5px" }} />
          </FacebookShareButton>
          <p className="font-normal text-[10.57px] leading-[12px] mt-[2.85px]">
            Facebook
          </p>
        </div>
      </div>
      <div className=" w-full px-[15px]">
        <div
          className=" mt-[23.08px] flex items-center justify-between w-full px-[15px] py-[12px] bg-[#2C2C2E] rounded-[12.5px]"
          onClick={handleClick}
        >
          <p className=" font-normal text-[16px] leading-[21px]">Copy Link</p>
          <Copy />
        </div>
        <div className=" mt-[15.38px]">
          <p className=" text-blue font-normal text-[16px] leading-[21px]">Edit Actions...</p>
        </div>
      </div>
    </>
  );
}

export default Sharepart;
const list = [
  {
    name: "AirDrop",
    icon: <Airdrop />,
  },
  {
    name: "First Last",
    icon: <Firstlast />,
  },
  {
    name: "Group",
    icon: <Firstlast />,
    num: "2 People",
  },
  {
    name: "First Last",
    icon: <Firstlast />,
  },
  {
    name: "First Last",
    icon: <Firstlast />,
  },
];

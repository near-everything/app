import React from "react";
import { ReactComponent as Arrow } from "assets/icon/close.svg";
import { ReactComponent as Figma } from "assets/icon/profile/figma.svg";
import { ReactComponent as Airdrop } from "assets/icon/profile/share/airdrop.svg";
import { ReactComponent as Firstlast } from "assets/icon/profile/share/firstlast.svg";
import { ReactComponent as Appicon } from "assets/icon/profile/share/appicon.svg";
type Props = {
  setShare: (close: boolean) => void;
};

function Sharepart({ setShare }: Props) {
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
      <div className=" flex items-center justify-start ml-[15.38px] overflow-auto w-full">
        {list.map((item, id) => (
          <div key={id} className='mr-[17px]'>
            <div>{item?.icon}</div>
          </div>
        ))}
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

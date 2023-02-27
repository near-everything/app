import React from "react";
import { ReactComponent as Circle } from "assets/icon/profile/circle.svg";
import { ReactComponent as Add } from "assets/icon/add.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="px-[54px] py-[24px] z-40 absolute bottom-[16px] right-[8px] left-[8px] bg-black80 backdrop-blur-[12px] rounded-[24px] flex items-center justify-between">
      <div>
        <Circle />
      </div>
      <div>
        <Add className=" w-[32px] h-[32px] text-white" />
      </div>
      <div className=" w-[24px] h-[24px] bg-white rounded-[50%] cursor-pointer" />
    </div>
  );
};

export default Footer;

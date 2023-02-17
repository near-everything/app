import React from "react";
import { ReactComponent as Arrow } from "assets/icon/arrowleft.svg";
import { ReactComponent as Menue } from "assets/icon/menue.svg";
import { MainBtn } from "component/shared/btn";

type Props = {
  setClose: (close: string) => void;
  temp: string;
};

function Selectedtemplate({ setClose, temp }: Props) {
  return (
    <div className="bg-gray-95 h-full px-[16px] backdrop-blur-[10px] relative z-20">
      <div className=" flex items-center justify-between pt-[16px]  relative">
        <div
          className=" bg-white20 rounded-[50%] p-[14px]  cursor-pointer "
          onClick={() => setClose("")}
        >
          <Arrow className="text-white" />
        </div>
        <p className="title18">{temp}</p>
        <MainBtn type="button" disabled={false} size="M" className=" px-[24px]">
          <p>apply</p>
        </MainBtn>
      </div>
      <div className=" flex items-center justify-start mt-[34px]">
        <Menue />
        <div className=" ml-[12px] px-[16px] py-[12px] bg-gray-90 rounded-[100px]">
          <p className=" text-[15px] font-normal leading-[16px]">
            Your colors will go here
          </p>
        </div>
      </div>
    </div>
  );
}

export default Selectedtemplate;

import React from "react";
import { ReactComponent as Arrow } from "assets/icon/arrowleft.svg";

type Props = {};

const Index = (props: Props) => {
  return (
    <div className=" h-full w-full">
      <div className=" flex items-center justify-between mt-[4px] px-[16px] mb-[12px] bg-white w-full">
        <div className=" bg-gray-10 rounded-[50%] p-[14px]">
          <Arrow className=" text-black" />
        </div>
        <div>
          <p className=" text-Body16 text-black ">settings</p>{" "}
        </div>
        <div></div>
      </div>
      <div className=" bg-black rounded-t-[22px] h-full"></div>
    </div>
  );
};

export default Index;

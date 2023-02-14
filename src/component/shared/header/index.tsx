import React from "react";
import { ReactComponent as People } from "assets/icon/people.svg";
import { ReactComponent as Add } from "assets/icon/add.svg";
type Props = {};

function Index({}: Props) {
  return (
    <div className="absolute bottom-[4px] right-[8px] left-[8px] flex items-center justify-between px-[55px] py-[26px] bg-black80 rounded-[24px] backdrop-blur-[12px]">
      <div className=" bg-white w-[20px] h-[20px] rounded-[50%]" />
      <Add className=" text-gray-30 w-[33px] h-[32px]"  />
      <People />
    </div>
  );
}

export default Index;

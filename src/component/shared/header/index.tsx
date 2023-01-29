import React from "react";
import { ReactComponent as People } from "assets/icon/people.svg";
import { ReactComponent as Add } from "assets/icon/add.svg";
type Props = {};

function Index({}: Props) {
  return (
    <div className=" flex items-center justify-between px-[55px] py-[26px] bg-black80 rounded-[24px] backdrop-blur-[12px] h-[72px]">
      <div className=" bg-white w-[20px] h-[20px] rounded-[50%]" />
      <Add />
      <People />
    </div>
  );
}

export default Index;

import React from "react";
import { ReactComponent as Mazecircle } from "assets/icon/mazecircle.svg";

type Props = {};

function Index({}: Props) {
  return (
    <div className=" flex items-center justify-center ">
      <div className="w-[20px] h-[20px] rounded-[50%] bg-white mr-[8px]" />
      <div className="w-[20px] h-[20px] rounded-[50%] bg-transparent border-solid border-white border-[3px] mr-[8px]" />
      <Mazecircle className=" text-white" />
    </div>
  );
}

export default Index;

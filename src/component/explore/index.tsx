import React, { useState } from "react";
import { ReactComponent as ArrowDown } from "assets/icon/arrowdown.svg";
import { ReactComponent as Arrowupright } from "assets/icon/arrowupright.svg";
import { ReactComponent as Smile } from "assets/icon/smile.svg";
import { ReactComponent as Iconc } from "assets/icon/iconc.svg";
import Circles from "component/shared/circles";
import { InteractionSecondarywhite } from "component/shared/btn";
import Header from "component/shared/header";
type Props = {};
function Index({}: Props) {
  return (
    <div className="  h-full overflow-auto ">
      <div className="bg-white w-full  h-full">
        <p className=" text-black py-[11px] text-[28px] leading-[34px] px-[16px]">
          explore
        </p>
        <div className=" bg-black p-[4px]  rounded-t-[24px] min-h-[93.5%]">
          <div className=" bg-gray-95 rounded-[22px] w-full py-[31px] px-[50px]">
            <Circles />
            <div className=" mt-[36px] text-center flex flex-col items-center justify-center">
              <p className=" text-gray-40 text-Body14">welcome to everything</p>
              <p className=" text-white text-title24">
                let’s add your first thing.
              </p>
              <pre className=" mt-[36px] text-gray-40 text-Body14">
                {"the plus button on the" + "\n" + " navbar to start"}
              </pre>
              <ArrowDown className=" mt-[8px] text-center" />
            </div>
          </div>
          <div className=" bg-gray-95 rounded-[22px] mt-[4px] w-full pt-[12px] pl-[12px] pb-[4px] pr-[4px]">
            <p className=" text-title18">invite friends</p>
            <pre className=" mt-[4px] text-gray-40 text-Body14">
              {"encourage your friends to join the new " + "\n" + "economy!"}
            </pre>
            <div className=" w-full flex items-center justify-end mt-[32px]">
              <InteractionSecondarywhite disabled={false} type="button">
                <p>invite friends</p>
              </InteractionSecondarywhite>
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-x-[4px] mt-[4px] mb-[7px]">
            <div className="bg-gray-95 rounded-[22px] pt-[4px] pl-[4px] pb-[12px] pr-[16.5px]">
              <div className=" flex items-center justify-between">
                <div className=" py-[12px] px-[8.75px] bg-gray-90 rounded-[18px]">
                  <Smile className=" text-white" />
                </div>
                <Arrowupright className=" text-gray-60" />
              </div>
              <pre className=" mt-[54px] pl-[6px] text-white text-Body16">
                {"join our Discord" + "\n" + "community"}
              </pre>
            </div>
            <div className="bg-gray-95 rounded-[22px] pt-[4px] pl-[4px] pb-[12px] pr-[16.5px]">
              <div className=" flex items-center justify-between">
                <div className=" py-[12px] px-[8.75px] bg-gray-90 rounded-[18px]">
                  <Iconc className=" text-white" />
                </div>
                <Arrowupright className=" text-gray-60" />
              </div>
              <pre className=" mt-[54px] pl-[6px] text-white text-Body16">
                {"share ideas &" + "\n" + "feedback"}
              </pre>
            </div>
          </div>
          <div className=" h-[80px]">
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;

import React from "react";
import Toggel from "component/shared/toggel";
import { ReactComponent as Close } from "assets/icon/close.svg";

type Props = {
  bulk: boolean;
  setBulk: (bulk: boolean) => void;
  setClose: (close: boolean) => void;
};

function Header({ setBulk, bulk, setClose }: Props) {
  return (
    // <div className="absolute top-0 z-40 w-full bg-[#0D0D0D80] backdrop-blur-[12px]">
      <div className="flex items-center justify-between px-[16px] pt-[4px] pb-[8px]">
        <div
          className="bg-white20 rounded-[50%] p-[14px] cursor-pointer"
          onClick={() => setClose(true)}
        >
          <Close className="text-white" />
        </div>
        <Toggel text="bulk upload" setBulk={setBulk} bulk={bulk} />
      </div>
    // </div>
  );
}

export default Header;

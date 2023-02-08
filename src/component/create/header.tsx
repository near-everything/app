import React from "react";
import Toggel from "component/shared/toggel";
import { ReactComponent as Arrow } from "assets/icon/close.svg";

type Props = {
  bulk: boolean;
  setBulk: (bulk: boolean) => void;
};

function Header({ setBulk, bulk }: Props) {
  return (
    <div className=" flex items-center justify-between pt-[6px] px-[16px]">
      <div className=" bg-white20 rounded-[50%] p-[14px]  cursor-pointer">
        <Arrow className="text-white" />
      </div>
      <Toggel text="bulk upload" setBulk={setBulk} bulk={bulk} />
    </div>
  );
}

export default Header;

import React from "react";
import { ReactComponent as Arrow } from "assets/icon/arrowleft.svg";
import { MainBtn } from "component/shared/btn";

type Props = {
  setClose: (close: boolean) => void;
};

const Newtemplate = ({ setClose }: Props) => {
  return (
    <div>
      <div className=" flex items-center justify-between pt-[16px]  relative">
        <div
          className=" bg-white20 rounded-[50%] p-[14px]  cursor-pointer "
          onClick={() => setClose(false)}
        >
          <Arrow className="text-white" />
        </div>
        <p className="text-title18">new template</p>
        <MainBtn type="button" disabled={false} size="M" className=" px-[24px]">
          <p>apply</p>
        </MainBtn>
      </div>
    </div>
  );
};

export default Newtemplate;

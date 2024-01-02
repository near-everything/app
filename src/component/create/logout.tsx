import React, { useRef } from "react";
import { ReactComponent as LogoutIcon } from "assets/icon/logout.svg";
import { Secondarywhite, Interactiontetriary } from "component/shared/btn";
import { useNavigate } from "react-router-dom";
type Props = {
  setClose: (close: boolean) => void;
};

function Logout({ setClose }: Props) {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0D0D0D99] h-full backdrop-blur-[10px] relative z-10">
      <div className=" absolute bottom-0 right-0 left-0 w-full bg-gray-95 border border-gray-90 border-solid rounded-t-[24px] h-[40%] pt-[27.5px] px-[16px] pb-[40px]">
        <p className=" text-title18 text-center mb-[31px]">quit?</p>
        <LogoutIcon className=" text-red text-center mx-auto" />
        <pre className=" mt-[8px] text-gray-40 text-Body14 text-center">
          {"Are you sure you want to quit uploading" + "\n" + "things?"}
        </pre>
        <div className=" mt-[32px] grid grid-cols-2 gap-x-[4px]">
          <Interactiontetriary
            disabled={false}
            type="button"
            className="py-[13px] mt-[19px] w-full tex-red"
            onClick={() => navigate(-1)}
          >
            <p className=" text-red text-Button16">quit uploading</p>
          </Interactiontetriary>
          <Secondarywhite
            disabled={false}
            type="button"
            size="M"
            className="py-[13px] mt-[19px] w-full"
            onClick={() => setClose(false)}
          >
            <p className="text-Button16">continue</p>
          </Secondarywhite>
        </div>
      </div>
    </div>
  );
}

export default Logout;

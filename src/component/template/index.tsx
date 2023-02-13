import React from "react";
import { ImageStart } from "./animations";
import { ReactComponent as Arrow } from "assets/icon/close.svg";

type Props = {
  list: string[];
  url: string | null;
  bulk: boolean;
  setClose: (close: boolean) => void;
  setUrl: (close: string | null) => void;
};

function Index({ list, url, bulk, setClose, setUrl }: Props) {
  return (
    <div className=" bg-black h-full  relative z-10 px-[4px]">
      <div className=" flex items-center justify-between pt-[6px] px-[16px]">
        <div
          className=" bg-white20 rounded-[50%] p-[14px]  cursor-pointer"
          onClick={() => {
            setClose(false);
            setUrl(null);
          }}
        >
          <Arrow className="text-white" />
        </div>
      </div>
      <p className=" mt-[16px] text-title28">what is this thing?</p>
      <p className=" mt-[16px] text-Body14 text-gray-40">
        add template that describes your thing
      </p>
      <ImageStart>
        <>
          {url && (
            <img
              src={url}
              alt="Screenshot"
              className="max-w-[182px] max-h-[241px]  rounded-[22px]"
            />
          )}
        </>
      </ImageStart>
    </div>
  );
}

export default Index;

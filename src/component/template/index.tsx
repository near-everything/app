import React, { useState } from "react";
import { ImageStart, Apply, Applydata } from "./animations";
import { ReactComponent as Arrow } from "assets/icon/close.svg";
import { ReactComponent as Clipboard } from "assets/icon/clipboard.svg";
import { MainBtn } from "component/shared/btn";
import Applytemplate from "./applytemplate";
type Props = {
  list: string[];
  url: string | null;
  bulk: boolean;
  setClose: (close: boolean) => void;
  setUrl: (close: string | null) => void;
};

function Index({ list, url, bulk, setClose, setUrl }: Props) {
  const [apply, setApply] = useState(false);
  return (
    <div className=" bg-black h-full  relative z-10 px-[4px]">
      <Applydata state={apply}>
        <div className=" bg-black h-full w-full relative z-10 ">
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
          <div className=" px-[12px]">
            <p className=" mt-[16px] text-title28">what is this thing?</p>
            <p className=" mt-[16px] text-Body14 text-gray-40">
              add template that describes your thing
            </p>
            <p className=" mt-[8px] mb-[16px] text-Button14 ">
              what are templates?
            </p>
          </div>
          <div
            className=" border-dashed border-gray-80 border w-full rounded-[20px] py-[17px] flex items-center justify-center mb-[16px]"
            onClick={() => setApply(true)}
          >
            <p className="text-gray-30 text-Button16">apply template</p>
            <Clipboard className="text-gray-30 ml-[10px]" />
            <p className=" ml-[10px] text-gray-50 text-Button14">(optional)</p>
          </div>
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
          <div className=" absolute bottom-[14px] left-0 right-0 w-full flex items-center justify-center">
            <MainBtn
              type="button"
              disabled={false}
              size="L"
              className=" px-[24px] w-full"
            >
              <p>save thing</p>
            </MainBtn>
          </div>
        </div>
      </Applydata>

      {apply && (
        <Apply>
          <Applytemplate setClose={setApply} />
        </Apply>
      )}
    </div>
  );
}

export default Index;

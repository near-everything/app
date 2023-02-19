import React, { useState } from "react";
import {
  ImageStart,
  Apply,
  Applydata,
  SaveData,
  Createlandinganimation,
} from "./animations";
import { ReactComponent as Arrow } from "assets/icon/close.svg";
import { ReactComponent as Clipboard } from "assets/icon/clipboard.svg";
import { MainBtn } from "component/shared/btn";
import Applytemplate from "./applytemplate";
import { ReactComponent as Shirt } from "assets/icon/templates/shirt.svg";
import { ReactComponent as Trash } from "assets/icon/trash.svg";
import { ReactComponent as Edit } from "assets/icon/edit.svg";
import Createlanding from "component/shared/createlanding";
type Props = {
  list: string[];
  url: string | null;
  bulk: boolean;
  setClose: (close: boolean) => void;
  setUrl: (close: string | null) => void;
};

function Index({ list, url, bulk, setClose, setUrl }: Props) {
  const [apply, setApply] = useState(false);
  const [save, setSave] = useState(false);
  const [template, setTemplate] = useState("");
  const handlesave = () => {
    setSave(true);
  };
  return (
    <div className=" bg-black h-full  relative z-10 px-[4px]">
      <Applydata state={apply}>
        <>
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
          {save ? (
            <Createlandinganimation>
              <Createlanding url={url} template={template} />
            </Createlandinganimation>
          ) : (
            <SaveData state={save}>
              <>
                <div className=" px-[12px]">
                  <p className=" mt-[16px] text-title28">what is this thing?</p>
                  <p className=" mt-[16px] text-Body14 text-gray-40">
                    add template that describes your thing
                  </p>
                  <p className=" mt-[8px] mb-[16px] text-Button14 ">
                    what are templates?
                  </p>
                </div>
                {template !== "" ? (
                  <div className=" bg-gray-95 w-full rounded-[20px] p-[4px] mb-[16px] flex items-center justify-between">
                    <div className=" flex items-center justify-start text-Button16 text-gray-30">
                      <div className=" bg-gray-90 rounded-[18px] w-[48px] h-[48px] flex items-center justify-center mr-[10px]">
                        <Shirt />
                      </div>
                      {template}
                    </div>
                    <div className="flex items-center justify-start">
                      <Trash
                        className=" text-red"
                        onClick={() => setTemplate("")}
                      />
                      <Edit
                        className=" ml-[8px] mr-[4px]"
                        onClick={() => setApply(true)}
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    className=" border-dashed border-gray-80 border w-full rounded-[20px] py-[17px] flex items-center justify-center mb-[16px]"
                    onClick={() => setApply(true)}
                  >
                    <p className="text-gray-30 text-Button16">apply template</p>
                    <Clipboard className="text-gray-30 ml-[10px]" />
                    <p className=" ml-[10px] text-gray-50 text-Button14">
                      (optional)
                    </p>
                  </div>
                )}
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
                    onClick={handlesave}
                  >
                    <p>save thing</p>
                  </MainBtn>
                </div>
              </>
            </SaveData>
          )}
        </>
      </Applydata>

      {apply && (
        <Apply>
          <Applytemplate setClose={setApply} setTemplate={setTemplate} />
        </Apply>
      )}
    </div>
  );
}

export default Index;

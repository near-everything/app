import { ReactComponent as Clipboard } from "assets/icon/clipboard.svg";
import { ReactComponent as Close } from "assets/icon/close.svg";
import { ReactComponent as Edit } from "assets/icon/edit.svg";
import { ReactComponent as Shirt } from "assets/icon/templates/shirt.svg";
import { ReactComponent as Trash } from "assets/icon/trash.svg";
import { MainBtn } from "component/shared/btn";
import Createlanding from "component/shared/createlanding";
import { useState } from "react";
import {
  Apply,
  Applydata,
  Createlandinganimation,
  SaveData,
} from "./animations";
import Applytemplate from "./applytemplate";
import Header from "./header";
type Props = {
  list: string[];
  url: string | null;
  bulk: boolean;
  setClose: (close: boolean) => void;
  setUrl: (close: string | null) => void;
  removeImage: (id: number) => void;
};

function Index({ list, url, bulk, setClose, setUrl, removeImage }: Props) {
  const [apply, setApply] = useState(false);
  const [save, setSave] = useState(false);
  const [template, setTemplate] = useState("");
  const handlesave = () => {
    setSave(true);
  };
  return (
    <div className="bg-black h-full relative z-10">
      <>
        <Header setClose={setClose} setUrl={setUrl} />
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
                  className=" border-dashed border-gray-80 border w-full rounded-[20px] h-[56px] flex items-center justify-center mb-[16px]"
                  onClick={() => setApply(true)}
                >
                  <p className="text-gray-30 text-Button16">apply template</p>
                  <Clipboard className="text-gray-30 ml-[10px]" />
                  <p className=" ml-[10px] text-gray-50 text-Button14">
                    (optional)
                  </p>
                </div>
              )}
              <div className={`grid grid-flow-row grid-cols-${list.length > 4 ? 4 : list.length} gap-1`}>
                {list.map((item, id) => (
                  <div
                    className="rounded-[22px] relative flex grow max-w-[182px] max-h-[241px]"
                    key={id}
                  >
                    <div className="absolute top-1 right-1">
                      <div
                        className="bg-white rounded-full h-[20px] w-[20px] cursor-pointer justify-center items-center flex"
                        onClick={() => removeImage(id)}
                      >
                        <Close className="text-red" />
                      </div>
                    </div>
                    <img
                      src={item}
                      alt="Screenshot"
                      className=" w-full h-full rounded-[12px]"
                    />
                  </div>
                ))}
              </div>
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
      {apply && (
        <Apply>
          <Applytemplate setClose={setApply} setTemplate={setTemplate} />
        </Apply>
      )}
    </div>
  );
}

export default Index;

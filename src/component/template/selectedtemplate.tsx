import React, { useState } from "react";
import { ReactComponent as Arrow } from "assets/icon/arrowleft.svg";
import { ReactComponent as Menue } from "assets/icon/menue.svg";
import { ReactComponent as Trash } from "assets/icon/trash.svg";
import { ReactComponent as Eraser } from "assets/icon/eraser.svg";
import { ReactComponent as Text } from "assets/icon/text.svg";
import { ReactComponent as Add } from "assets/icon/add.svg";
import { MainBtn } from "component/shared/btn";

type Props = {
  setClose: (close: string) => void;
  setTemplate: (template: string) => void;
  temp: string;
  setSelected: (select: boolean) => void;
  apply: (select: boolean) => void;
};

function Selectedtemplate({
  setClose,
  temp,
  setSelected,
  setTemplate,
  apply,
}: Props) {
  const [list, setList] = useState(templist);
  const handleRemove = (id: string) => {
    setList(list.filter((el) => el.name !== id));
  };
  return (
    <div className="bg-gray-95 h-full backdrop-blur-[10px] relative z-20">
      <div className=" flex items-center justify-between pt-[16px] px-[16px]  relative">
        <div
          className=" bg-white20 rounded-[50%] p-[14px]  cursor-pointer "
          onClick={() => {
            setClose("");
            setSelected(false);
          }}
        >
          <Arrow className="text-white" />
        </div>
        <p className="text-title18">{temp}</p>
        <MainBtn
          type="button"
          disabled={false}
          size="M"
          className=" px-[24px]"
          onClick={() => {
            setTemplate(temp);
            setClose("");
            setSelected(false);
            apply(false);
          }}
        >
          <p>apply</p>
        </MainBtn>
      </div>
      <div className=" flex items-center justify-start mt-[34px] px-[10px]">
        <Menue />
        <div className=" ml-[12px] px-[16px] py-[12px] bg-gray-90 rounded-[100px]">
          <p className=" text-[15px] font-normal leading-[16px]">
            Your colors will go here
          </p>
        </div>
      </div>
      <div className=" mt-[24px] px-[4px]">
        {list.map((item, id, arr) => (
          <div
            key={id}
            className="bg-gray-90 rounded-[16px] flex items-start justify-between mb-[8px] px-[8px] py-[16px]"
          >
            <div className="flex items-start justify-start w-[90%]">
              <Menue />
              <div
                className={
                  " flex flex-col items-start justify-start ml-[12px]  w-full"
                }
              >
                <p
                  className={
                    arr?.length - 1 === id
                      ? " text-Body16 pb-[16px] border-b border-solid border-b-gray-80 w-full  text-center"
                      : " text-Body16 pb-[16px] border-b border-solid border-b-gray-80 w-full "
                  }
                >
                  {item?.name}
                </p>
                <p className=" mt-[16px] text-gray-40 text-Body16 text-left">
                  Default value (optional)
                </p>
              </div>
            </div>

            <Trash
              className=" text-red"
              onClick={() => handleRemove(item?.name)}
            />
          </div>
        ))}
      </div>
      <div className=" absolute bottom-[24px] w-[60%] left-0 right-0 bg-black80 rounded-[20px] mx-auto backdrop-blur-[15px] px-[16px] py-[8px] flex items-center justify-between">
        <Eraser />
        <Text />
        <Add className=" text-white w-[32px] h-[32px]" />
      </div>
    </div>
  );
}

export default Selectedtemplate;
const templist = [
  {
    name: "Brand",
  },
  {
    name: "Material",
  },
  {
    name: "Size",
  },
  {
    name: "Purchase price",
  },
];

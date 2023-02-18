import React from "react";
import { useLocation } from "react-router-dom";
import Snackbar from "component/shared/snackbar";
import { Secondarywhite } from "component/shared/btn";
import { ReactComponent as Addcircle } from "assets/icon/addcircle.svg";

type Props = {};

function Finishtemplate({}: Props) {
  const location = useLocation();
  const data = location.state?.data;
  return (
    <div className=" relative bg-black h-full w-full rounded-t-[24px] mt-[40px] border-[4px] border-solid border-black overflow-auto">
      <Snackbar
        message="your things was uploaded successfully"
        success={true}
      />
      <img
        src={location.state?.data}
        alt="Screenshot"
        className="w-full mx-auto h-auto max-h-[490px]  rounded-[22px]"
      />
      <div className=" mt-[24px]">
        {info.map((item, id) => (
          <div
            key={id}
            className="bg-gray-95 rounded-[16px] pt-[8px] pb-[8px] pr-[8px] pl-[16px] w-[98%] mb-[8px] mx-auto flex items-center justify-between"
          >
            <p className=" text-Body14 text-[#B8B9B9]">{item?.name}</p>
            <Secondarywhite
              disabled={false}
              type="button"
              size="S"
              className=" px-[24px] py-[10px]"
            >
              <div className=" flex items-center justify-center ">
                <Addcircle className=" mr-[4px]" />
                <p>click to add</p>
              </div>
            </Secondarywhite>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Finishtemplate;

const info = [
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

import React from "react";
import { photos } from "component/explore/photos";
import { ReactComponent as Search } from "assets/icon/search.svg";
import { ReactComponent as Setting } from "assets/icon/setting.svg";
import { ReactComponent as Add } from "assets/icon/add.svg";
import Prof from "assets/image/profile.png";
type Props = {};

const Collectiongallery = (props: Props) => {
  return (
    <div className=" w-full h-full ">
      <div className=" flex items-center justify-end w-full pt-[20px] mb-[28px] px-[12px]">
        <Search className="mr-[12px]" />
        <Setting className="mr-[12px]" />
        <Add className=" w-[24px] h-[24px]" />
      </div>
      <div className="overflow-auto h-full">
        <div className=" grid grid-cols-2 gap-[4px] h-full items-center justify-center ">
          {photos.map((item, id) => (
            <div
              key={id}
              className=" h-[166px] w-[181.5px] rounded-[12px] overflow-hidden relative"
            >
              <img
                src={Prof}
                className="w-full h-full rounded-[12px] overflow-hidden"
              />
              <div className=" absolute bottom-[8px] left-[8px]">
                <p className=" text-title18">Book</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collectiongallery;

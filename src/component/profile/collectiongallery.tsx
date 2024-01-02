import React from "react";
import { ReactComponent as Search } from "assets/icon/search.svg";
import { ReactComponent as Setting } from "assets/icon/setting.svg";
import { ReactComponent as Add } from "assets/icon/add.svg";
import Prof from "assets/image/profile.png";
type Props = {};

const Collectiongallery = (props: Props) => {
  return (
    <div className=" w-full h-full pb-[300px]">
      <div className=" flex items-center justify-end w-full pt-[20px] mb-[28px] px-[12px]">
        <Search className="mr-[12px]" />
        <Setting className="mr-[12px]" />
        <Add className=" w-[24px] h-[24px]" />
      </div>
      <div className="overflow-auto h-full ">
        <div className=" grid grid-cols-2 gap-[4px] h-full items-center justify-center ">
          {photos.map((item, id) => (
            <div
              key={id}
              className={
                " h-[166px] w-[181.5px] rounded-[12px] overflow-hidden relative"
              }
            >
              {id === 0 ? (
                <div className="relative h-full mx-auto">
                  <img
                    src={Prof}
                    className="h-[150px] z-20 w-[181.5px]  rounded-[12px] absolute  bottom-0 right-0 left-0  mx-auto"
                    alt="Prof"
                  />
                  <img
                    src={Prof}
                    className="h-[158px] z-10 w-[169.76px]  rounded-[12px]  absolute bottom-0 right-0 left-0  mx-auto"
                    alt="Prof"
                  />
                  <img
                    src={Prof}
                    className="h-[166px] z-0 w-[150.19px]  rounded-[12px]  absolute bottom-0 right-0 left-0  mx-auto"
                    alt="Prof"
                  />
                </div>
              ) : (
                <img
                  src={Prof}
                  className="w-full h-full rounded-[12px] overflow-hidden"
                  alt="Prof"
                />
              )}

              <div className=" absolute bottom-[8px] left-[8px] z-30">
                <p className=" text-title18">{item?.name}</p>
                <p className=" text-[#D1D1D1] text-caption12">{item?.num}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collectiongallery;
const photos = [
  {
    name: "everything",
    num: "43 things",
  },
  {
    name: "Books",
  },
  {
    name: "Books",
  },
  {
    name: "Books",
  },
  {
    name: "Books",
  },
  {
    name: "Books",
  },
  {
    name: "Books",
  },
  {
    name: "Books",
  },
  {
    name: "Books",
  },
  {
    name: "Books",
  },
  {
    name: "Books",
  },
  {
    name: "Books",
  },
];

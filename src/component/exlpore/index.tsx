import React, { useState } from "react";
import { ReactComponent as Arrow } from "assets/icon/arrowleft.svg";
import { ReactComponent as Close } from "assets/icon/close.svg";
import { ReactComponent as Search } from "assets/icon/search.svg";
import { ReactComponent as Notification } from "assets/icon/notification.svg";
import { ReactComponent as People } from "assets/icon/people.svg";
import { ReactComponent as Add } from "assets/icon/add.svg";
import { SerchItem } from "./animations";
import Searchbox from "./searchbox";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

type Props = {};
const settings = {
  className: "center",
  centerMode: false,
  infinite: false,
  centerPadding: "0px",
  slidesToShow: 3,
  rows: 2,
  slidesPerRow: 2,
  vertical: true,
  verticalSwiping: true,
};
function Index({}: Props) {
  const [state, setSate] = useState(false);
  return (
    <div className=" bg-black px-[16px] h-full overflow-hidden">
      {!state ? (
        <>
          <div className=" flex items-center justify-between pt-[8px]">
            <p className=" text-white text-[28px] ">explore</p>
            <div className=" flex items-center justify-start">
              <Search
                className=" cursor-pointer"
                onClick={() => setSate(true)}
              />
              <Notification className=" ml-[16px]" />
            </div>
          </div>
          <div className=" rounded-[20px] overflow-auto bg-blackdark w-full h-[85%]">
            <Gallery
              photos={photos}
              direction={"column"}
              columns={2}
              margin={2}
            />
          </div>
        </>
      ) : (
        <SerchItem>
          <div className=" flex items-center justify-between pt-[8px]">
            <Arrow onClick={() => setSate(false)} />
            <div className=" relative w-[92%] h-auto">
              <Searchbox />
              <div className=" absolute right-[14px] top-[50%] -translate-y-center">
                <Close />
              </div>
            </div>
          </div>
        </SerchItem>
      )}

      <div className=" absolute bottom-[14px] right-0 left-0 px-[16px]">
        <div className=" flex items-center justify-between">
          <div className=" flex flex-col items-center justify-center">
            <div className=" w-[5px] h-[5px] rounded-[50%] bg-white mb-[4.5px]" />
            <p className=" text-Caption-1 text-white">explore</p>
          </div>
          <Add />
          <People />
        </div>
      </div>
    </div>
  );
}

export default Index;

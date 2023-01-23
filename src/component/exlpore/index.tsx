import React, { useState } from "react";
import Slider from "react-slick";
import img from "assets/image/img.png";
import { ReactComponent as Search } from "assets/icon/search.svg";
import { ReactComponent as Notification } from "assets/icon/notification.svg";
import { ReactComponent as People } from "assets/icon/people.svg";
import { ReactComponent as Add } from "assets/icon/add.svg";
import { SerchItem } from "./animations";
import Searchbox from "./searchbox";

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
          <div className=" rounded-[20px] overflow-auto bg-blackdark w-full h-[85%]"></div>{" "}
        </>
      ) : (
        <SerchItem>
          <Searchbox />
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
      {/* <Slider {...settings}>
        <div   className=" inline-block w-[185.5px] h-[177px]">
          <img
            src={img}
            alt={img}
            className=" inline-block w-[185.5px] h-[177px]"
          />
        </div>
        <div >
          <img src={img} alt={img} className=" inline-block w-[185.5px] h-[313px]"/>
        </div>
        <div>
          <img src={img} alt={img} className=" inline-block w-[185.5px] h-[234px]" />
        </div>
        <div>
          <img src={img} alt={img} className=" inline-block w-[185.5px] h-[210px]" />
        </div>
        <div>
          <img src={img} alt={img} className=" inline-block w-[185.5px] h-[419px]" />
        </div>
        <div>
          <img src={img} alt={img} className=" inline-block w-[185.5px] h-[177px]" />
        </div>
      </Slider> */}
    </div>
  );
}

export default Index;

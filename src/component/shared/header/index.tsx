import React from "react";
import { ReactComponent as Search } from "assets/icon/search.svg";
import { ReactComponent as Notification } from "assets/icon/notification.svg";
type Props = {};

function Index({}: Props) {
  return (
    <div className=" flex items-center justify-between px-[16px] py-[11px]">
      <p className=" text-title28">explore</p>
      <div className="flex items-center justify-start">
        <Search className=" bg-gray-10 p-[14px] rounded-[50%]" />
        <Notification className=" bg-gray-10 p-[15.67px] rounded-[50%] " />
      </div>
    </div>
  );
}

export default Index;

import React, { useState } from "react";
import { ReactComponent as Arrow } from "assets/icon/arrowleft.svg";
import Footer from "component/profile/footer";
import Noaccount from "./noaccount";
import Hasaccount from "./hasaccount";
type Props = {};

const Index = (props: Props) => {
  const [account, setAccount] = useState(false);
  return (
    <div className=" h-full w-full">
      <div className=" flex items-center justify-between mt-[4px] px-[16px] mb-[12px] bg-white w-full">
        <div className=" bg-gray-10 rounded-[50%] p-[14px]">
          <Arrow className=" text-black" />
        </div>
        <div>
          <p className=" text-Body16 text-black ">settings</p>{" "}
        </div>
        <div className=" bg-gray-10 rounded-[50%] p-[14px] opacity-0">
          <Arrow className=" text-black" />
        </div>
      </div>
      <div className=" bg-black rounded-t-[22px] h-full p-[4px]">
        {!account ? <Noaccount /> : <Hasaccount />}
      </div>
      <Footer />
    </div>
  );
};

export default Index;

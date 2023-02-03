import React, { useState, useEffect } from "react";
import {
  Connectcircle,
  Connectemptycircle,
  Connectmulticircle,
} from "./animations";
import { AnimateSharedLayout, motion, Transition } from "framer-motion";
import { ReactComponent as Everything } from "assets/icon/enerythingicon.svg";

type Props = {};
interface ITab {
  tabIndex: number;
}

const transition: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  duration: 1,
};

const text = "setting up your" + "\n" + "everything";
function Connect({}: Props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className=" bg-black px-[16px] h-full">
      <AnimateSharedLayout>
        <motion.ul className=" flex flex-col" transition={transition}>
          <div>
            <Everything className=" mt-[40px] mx-auto" />
          </div>

          <div className=" absolute top-[50%]  left-[50%] -translate-x-center -translate-y-center">
            <pre className="text-white text-center  text-title24 ">{text}</pre>
            <div className=" mt-[25px] flex flex-col items-center justify-center">
              <Connectcircle />
              <div className=" mt-[12px]">
                <Connectemptycircle />
              </div>
              <div className=" mt-[12px]">
                <Connectmulticircle />
              </div>
            </div>
          </div>
        </motion.ul>
      </AnimateSharedLayout>
    </div>
  );
}

export default Connect;

import React, { useState, useEffect } from "react";
import { CircleItem, CircleItem1, CircleItem2, TextItem } from "./animations";
import {
  AnimateSharedLayout,
  motion,
  Transition,
  useTime,
  useTransform,
} from "framer-motion";
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

const tabs: ITab[] = [
  {
    tabIndex: 0,
  },
  {
    tabIndex: 1,
  },
  {
    tabIndex: 2,
  },
];
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
              {tabs.map(({ tabIndex }, id) => (
                <div
                  key={id}
                  className="flex items-center flex-col justify-center first:mb-[12px] last:mt-[12px]"
                >
                  {id === 0 ? (
                    <CircleItem isSelected={tabIndex === activeTab} />
                  ) : id === 1 ? (
                    <CircleItem1 isSelected={tabIndex === activeTab} />
                  ) : (
                    <CircleItem2 isSelected={tabIndex === activeTab} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.ul>
      </AnimateSharedLayout>
    </div>
  );
}

export default Connect;

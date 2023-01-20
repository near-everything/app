import React, { useState } from "react";
import { AnimateSharedLayout, motion, Transition } from "framer-motion";
import { ReactComponent as Everything } from "assets/icon/enerythingicon.svg";
import {
  ColorItem,
  CircleItem,
  CircleItem1,
  CircleItem2,
  TextItem,
} from "./animations";

type Props = {};

interface ITab {
  tabIndex: number;
  description: string;
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
    description:
      "a streamlined tool" +
      "\n" +
      "for uploading things to the" +
      "\n" +
      "inventory of everything.",
  },
  {
    tabIndex: 1,
    description:
      "open source." + "\n" + "offline first." + "\n" + "community owned.",
  },
  {
    tabIndex: 2,
    description:
      "with everything in your" +
      "\n" +
      "pocket, you can do" +
      "\n" +
      "anything",
  },
];

const Index: React.FC<Props> = ({}: Props) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleToggle = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div className=" bg-black px-[16px] h-full">
      <AnimateSharedLayout>
        <motion.ul className="h-full flex flex-col" transition={transition}>
          <div className="grid grid-cols-3 gap-x-[4px] pt-[8px]">
            {tabs.map(({ tabIndex }, id) => (
              <ColorItem
                key={id}
                isSelected={tabIndex === activeTab}
                onClick={() => handleToggle(tabIndex)}
              />
            ))}
          </div>
          <Everything className=" mt-[40px] mx-auto" />
          <div className=" absolute top-[50%]  left-[50%] -translate-x-center -translate-y-center">
            {tabs.map(
              ({ tabIndex }, id) =>
                activeTab === id && (
                  <TextItem key={id} text={tabs[activeTab].description} />
                )
            )}

            <div className=" mt-[80px]">
              {tabs.map(({ tabIndex }, id) => (
                <div
                  key={id}
                  className="flex items-center justify-center flex-col first:mb-[12px] last:mt-[12px]"
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
};

export default Index;

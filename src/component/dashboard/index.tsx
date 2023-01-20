import React, { useState } from "react";
import { AnimateSharedLayout, motion, Transition } from "framer-motion";

type Props = {};
interface IColorItem {
  isSelected?: boolean;
  onClick?: () => void;
}
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
      "a streamlined tool for uploading things to the inventory of everything.",
  },
  {
    tabIndex: 1,
    description: "open source. offline first. community owned.",
  },
  {
    tabIndex: 2,
    description: "with everything in your pocket, you can do anything.",
  },
];

const ColorItem: React.FC<IColorItem> = ({ isSelected, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        background: isSelected ? "#fff" : "#242424",
      }}
      transition={{ duration: 0.5 }}
      className={"bg-blacklight h-[4px] cursor-pointer rounded-[100px]"}
    />
  );
};

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
          <h1 className="text-white">everything</h1>
          <p className="text-white">{tabs[activeTab].description}</p>
        </motion.ul>
      </AnimateSharedLayout>
    </div>
  );
};

export default Index;

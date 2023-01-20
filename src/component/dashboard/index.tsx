import React, { useState } from "react";
import { AnimateSharedLayout, motion, Transition } from "framer-motion";
import { ReactComponent as Everything } from "assets/icon/enerythingicon.svg";
import { ReactComponent as Emptycircle } from "assets/icon/emptycircle.svg";
import { ReactComponent as Emptywhitecircle } from "assets/icon/emptywhitecircle.svg";

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
      className={"bg-blacklight h-[4px] cursor-pointer rounded-[100px] "}
    />
  );
};
const CircleItem: React.FC<IColorItem> = ({ isSelected }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        background: isSelected ? "#fff" : "#242424",
        width: isSelected ? "40px" : "16px",
        height: isSelected ? "40px" : "16px",
      }}
      transition={{ duration: 0.5 }}
      className={" w-[16px] h-[16px] rounded-[50%] bg-blacklight "}
    />
  );
};
const CircleItem1: React.FC<IColorItem> = ({ isSelected }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        borderColor: isSelected ? "#fff" : "#242424",
        width: isSelected ? "40px" : "16px",
        height: isSelected ? "40px" : "16px",
        backgroundColor: "transparent",
        borderWidth:isSelected ? "5px" : "3px"
      }}
      transition={{ duration: 0.5 }}
      className={
        " w-[16px] h-[16px] rounded-[50%] bg-transparent border-solid border-blacklight "
      }
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
          <Everything className=" mt-[40px] mx-auto" />
          <div className=" absolute top-[50%]  left-[50%] -translate-x-center -translate-y-center">
            <pre className="text-white text-center  text-Title-X ">
              {tabs[activeTab].description}
            </pre>
            <div className=" mt-[80px]">
              {tabs.map(({ tabIndex }, id) => (
                <div
                  key={id}
                  className="flex items-center justify-center flex-col first:mb-[12px] last:mt-[12px]"
                >
                  {id === 0 ? (
                    <CircleItem isSelected={tabIndex === activeTab} />
                  ) : (
                    <CircleItem1 isSelected={tabIndex === activeTab} />
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

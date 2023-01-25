import React, { useState } from "react";
import { AnimateSharedLayout, motion, Transition } from "framer-motion";
import { ReactComponent as Everything } from "assets/icon/enerythingicon.svg";
import {
  CircleItem,
  CircleItem1,
  CircleItem2,
  TextItem,
  Info,
} from "./animations";
import { ReactComponent as Arrow } from "assets/icon/arrowright.svg";
import Logininfo from "./logininfo";
import {
  InteractionSecondarywhite,
  Interactiontetriary,
  MainBtn,
  SecondaryBtn,
} from "component/shared/btn";

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
  const [info, setInfo] = useState(false);
  const handleToggle = (id: number) => {
    setActiveTab(id);
  };

  return (
    < >
      {!info ? (
        <div className=" bg-black px-[16px] h-full">
          <AnimateSharedLayout>
            <motion.ul className=" flex flex-col" transition={transition}>
              <div>
                <Everything className=" mt-[40px] mx-auto" />
                <div className=" mt-[29px] flex items-center justify-center">
                  {tabs.map(({ tabIndex }, id) => (
                    <div
                      key={id}
                      className="flex items-center justify-center first:mr-[12px] last:ml-[12px]"
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

              <div className=" absolute top-[50%]  left-[50%] -translate-x-center -translate-y-center">
                {tabs.map(
                  ({ tabIndex }, id) =>
                    activeTab === id && (
                      <TextItem key={id} text={tabs[activeTab].description} />
                    )
                )}
              </div>
            </motion.ul>
          </AnimateSharedLayout>
          <div className=" absolute bottom-[14px] right-0 left-0 px-[16px] text-center">
            {activeTab !== 2 ? (
              <div className=" flex flex-col items-center justify-center">
                <InteractionSecondarywhite
                  type="button"
                  onClick={() => setActiveTab((perv) => perv + 1)}
                  disabled={false}
                >
                  <div className=" flex items-center justify-center text-Button16">
                    <p className=" mr-[7.5px] text-Button16">next</p>
                    <Arrow />
                  </div>
                </InteractionSecondarywhite>
                <Interactiontetriary
                  type="button"
                  onClick={() => setActiveTab(2)}
                  disabled={false}
                >
                  <p className="  text-Button16">skip</p>
                </Interactiontetriary>
              </div>
            ) : (
              <div className=" flex flex-col items-center justify-center">
                <MainBtn
                  type="button"
                  onClick={() => setInfo(true)}
                  disabled={false}
                  size="L"
                  className=" px-[24px]"
                >
                  <p>connect to everything</p>
                </MainBtn>
                <SecondaryBtn
                  type="button"
                  onClick={() => setInfo(true)}
                  disabled={false}
                  size="L"
                  className=" px-[24px]"
                >
                  <p className=" mr-[7.5px] text-Button16">
                    start without account
                  </p>
                </SecondaryBtn>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Info>
          <Logininfo />
        </Info>
      )}
    </>
  );
};

export default Index;

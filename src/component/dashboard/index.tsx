import React, { useState, FC } from "react";
import { AnimateSharedLayout, motion, Transition } from "framer-motion";
import styled from "styled-components";

type Props = {};
interface IColorItem {
  isSelected?: boolean;
  onClick?: () => void;
}

const ColorListStyled = styled(motion.ul)`
  margin: 0;
  padding: 0;
`;
const transition: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  duration: 1,
};
const ColorOutLineStyled = styled(motion.div)`
  margin: 0;
  padding: 0;
`;
function Index({}: Props) {
  const [activetab, setActivetab] = useState(0);
  const handleToggle = (id: number) => {
    setActivetab(id);
  };
  return (
    <div className=" bg-black px-[16px] h-full">
      <AnimateSharedLayout>
        <ColorListStyled transition={transition}>
          <div className=" grid grid-cols-3 gap-x-[4px] pt-[8px]">
            {tab.map((item, id) => (
              <ColorItem
                key={id}
                isSelected={id === activetab}
                onClick={() => handleToggle(id)}
              />
            ))}
          </div>
        </ColorListStyled>
      </AnimateSharedLayout>
    </div>
  );
}

export default Index;

const tab = [
  {
    tab: 1,
  },
  {
    tab: 2,
  },
  {
    tab: 3,
  },
];

const ColorItem: FC<IColorItem> = ({ isSelected, onClick }) => {
  return (
    <ColorOutLineStyled
      onClick={onClick}
      transition={transition}
      className={
        isSelected
          ? " bg-white h-[4px] cursor-pointer rounded-[100px]"
          : " bg-blacklight h-[4px]  cursor-pointer rounded-[100px]"
      }
    />
  );
};

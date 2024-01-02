import React, { useRef  } from "react";
import { AnimateSharedLayout, motion, Transition } from "framer-motion";
type Props = {};
interface IColorItem {
  isSelected?: boolean;
  onClick?: () => void;
}
interface IColorItemread {
  isSelected?: boolean;
}
interface ITextItem {
  children: JSX.Element;
}

export const SerchItem: React.FC<ITextItem> = ({ children }) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <motion.div
      animate={{
        x: [windowSize.current[0], 0],
        width: "100%",
        height: "85%",
      }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        repeatDelay: 1,
        duration: 2,
      }}
    >
      {children}
    </motion.div>
  );
};

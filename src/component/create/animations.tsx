import React, { useRef } from "react";
import { motion } from "framer-motion";
interface IInfoItem {
  children: JSX.Element;
}
export const Info: React.FC<IInfoItem> = ({ children }) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <motion.div
      animate={{
        y: [windowSize.current[1], 0],
        width: "100%",
        height: "100%",
        position: "absolute",
        top: [windowSize.current[1], 0],
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

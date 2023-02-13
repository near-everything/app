import React, { useRef } from "react";
import { motion } from "framer-motion";
interface IInfoItem {
  children: JSX.Element;
}

export const ImageStart: React.FC<IInfoItem> = ({ children }) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const location = (40 * windowSize.current[1]) / 100;

  return (
    <motion.div
      animate={{
        y: [location, 0],
        width: ["72px", "182px"],
        height: ["92px", "241px"],
        borderRadius: "22px",
        overflow:'hidden'
      }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        repeatDelay: 0,
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

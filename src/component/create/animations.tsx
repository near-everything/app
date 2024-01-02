import React, { useRef } from "react";
import { motion } from "framer-motion";
interface IInfoItem {
  children: JSX.Element;
}
interface IInfoItemstate {
  children: JSX.Element;
  state: boolean;
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
export const Searchpart: React.FC<IInfoItemstate> = ({ children,state }) => {
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
export const Uploadpart: React.FC<IInfoItem> = ({ children }) => {
  return (
    <motion.div
      animate={{
        position: "absolute",
        bottom: ["30px", "-100px"],
        left: 0,
        right: 0,
        width: "100%",
        margin: "0 auto",
        height: "100%",
      }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        repeatDelay: 0,
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};
export const Bulkpart: React.FC<IInfoItem> = ({ children }) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <motion.div
      animate={{
        y: [0, windowSize.current[1]],
        width: "100%",
        margin: "0 auto",
        height: "100%",
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
export const Bodyanimation: React.FC<IInfoItem> = ({ children }) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const location = (40 * windowSize.current[1]) / 100;
  return (
    <motion.div
      animate={{
        y: [location, 0],
        width: "100%",
        height: "100%",
        position: "absolute",
        top: [location, 0],
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

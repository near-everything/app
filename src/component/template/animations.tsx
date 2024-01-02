import React, { useRef } from "react";
import { motion } from "framer-motion";
interface IInfoItem {
  children: JSX.Element;
}
interface IInfoItemstate {
  children: JSX.Element;
  state: boolean;
}
interface IInfoItemstate1 {
  children: JSX.Element;
  state: boolean;
  state1: boolean;
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
        overflow: "hidden",
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
export const Apply: React.FC<IInfoItem> = ({ children }) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <motion.div
      animate={{
        y: [windowSize.current[1], 0],
        width: "98%",
        height: "100%",
        position: "absolute",
        overflow: "hidden",
        top: [windowSize.current[1], 0],
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
export const Select: React.FC<IInfoItem> = ({ children }) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <motion.div
      animate={{
        x: [windowSize.current[0], 0],
        y: [0, 0],
        width: "100%",
        height: "100%",
        position: "absolute",
        overflow: "hidden",
        top: [0, 0],
        left: [0, 0],
        right: [0, 0],
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
export const TemplateSelect: React.FC<IInfoItemstate1> = ({
  children,
  state,
  state1,
}) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return state1 ? (
    <motion.div
      animate={{
        x: [0, 0],
        y: [0, -windowSize.current[1]],
        width: "98%",
        height: "100%",
        position: "absolute",
        overflow: "hidden",
        top: [0, -windowSize.current[0]],
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
  ) : (
    <motion.div
      animate={{
        x: state ? [0, -windowSize.current[0]] : [0, 0],
        y: [0, 0],
        width: "98%",
        height: "100%",
        position: "absolute",
        overflow: "hidden",
        top: [0, 0],
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
export const Applytemplate: React.FC<IInfoItem> = ({ children }) => {
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
        repeatDelay: 0,
        duration: 1.5,
      }}
    >
      {children}
    </motion.div>
  );
};
export const Applydata: React.FC<IInfoItemstate> = ({ children, state }) => {
  return state ? (
    <motion.div
      animate={{
        y: [0, -60],
        width: "100%",
        height: "100%",
        opacity: [1, 0],
      }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        repeatDelay: 0.5,
        duration: 1.5,
      }}
    >
      {children}
    </motion.div>
  ) : (
    <> {children}</>
  );
};
export const SaveData: React.FC<IInfoItemstate> = ({ children, state }) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return state ? (
    <motion.div
      animate={{
        y: [0, windowSize.current[1]],
        width: "100%",
        height: "100%",
        opacity: [1, 0],
      }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        repeatDelay: 0,
        duration: 1.5,
      }}
    >
      {children}
    </motion.div>
  ) : (
    <> {children}</>
  );
};
export const Createlandinganimation: React.FC<IInfoItem> = ({ children }) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <motion.div
      animate={{
        y: [-windowSize.current[1], 0],
        width: "100%",
        height: "100%",
        opacity: [0, 1],
      }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        repeatDelay: 0.5,
        duration: 1.5,
      }}
    >
      {children}
    </motion.div>
  );
};
export const Newtemplateanimation: React.FC<IInfoItem> = ({ children }) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <motion.div
      animate={{
        y: [windowSize.current[1], 0],
        width: "100%",
        height: "100%",
        opacity: [0, 1],
      }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        repeatDelay: 0.5,
        duration: 1.5,
      }}
    >
      {children}
    </motion.div>
  );
};

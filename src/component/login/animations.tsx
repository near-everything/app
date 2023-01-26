import React, { useRef } from "react";
import { AnimateSharedLayout, motion, useTime, useTransform } from "framer-motion";
type Props = {};
interface IColorItem {
  isSelected?: boolean;
  onClick?: () => void;
}
interface IColorItemread {
  isSelected?: boolean;
}
interface ITextItem {
  text?: string;
}
interface IInfoItem {
  children: JSX.Element;
}

export const ColorItem: React.FC<IColorItem> = ({ isSelected, onClick }) => {
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
export const CircleItem: React.FC<IColorItemread> = ({ isSelected }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        background: isSelected ? "#fff" : "#242424",
        width: isSelected ? "32px" : "16px",
        height: isSelected ? "32px" : "16px",
      }}
      transition={{ duration: 0.5 }}
      className={" w-[16px] h-[16px] rounded-[50%] bg-blacklight "}
    />
  );
};
export const TextItem: React.FC<ITextItem> = ({ text }) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <motion.div

      animate={{
        x: [windowSize.current[0], -20, 0],
      }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        repeatDelay: 1,
        duration: 2,
      }}
    >
      <pre className="text-white text-center  text-title24 ">{text}</pre>
    </motion.div>
  );
};
export const CircleItem1: React.FC<IColorItemread> = ({ isSelected }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        borderColor: isSelected ? "#fff" : "#242424",
        width: isSelected ? "32px" : "16px",
        height: isSelected ? "32px" : "16px",
        backgroundColor: "transparent",
        borderWidth: isSelected ? "5px" : "3px",
      }}
      transition={{ duration: 0.5 }}
      className={
        " w-[16px] h-[16px] rounded-[50%] bg-transparent border-solid border-blacklight "
      }
    />
  );
};

export const CircleItem2: React.FC<IColorItemread> = ({ isSelected }) => {
  return (
    <motion.svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        width: isSelected ? "32px" : "16px",
        height: isSelected ? "32px" : "16px",
      }}
      transition={{ duration: 0.5 }}
    >
      <motion.g>
        <motion.path
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            fill: isSelected ? "#fff" : "#242424",
            width: isSelected ? "40px" : "16px",
            height: isSelected ? "40px" : "16px",
          }}
          transition={{ duration: 0.5 }}
          strokeWidth={4}
          strokeDasharray="0 1"
          fill={isSelected ? "#fff" : "#242424"}
          d="M13.9668 7.9951C13.9666 6.61561 13.4881 5.27887 12.6128 4.21263C11.7375 3.14639 10.5196 2.41661 9.1666 2.14765C7.81358 1.87868 6.40917 2.08717 5.19263 2.73758C3.9761 3.38799 3.02271 4.44008 2.49491 5.71461C1.96711 6.98914 1.89755 8.40724 2.29808 9.7273C2.69861 11.0474 3.54445 12.1877 4.69149 12.9541C5.83853 13.7204 7.2158 14.0653 8.58864 13.9301C9.96148 13.7948 11.245 13.1878 12.2204 12.2123C12.7742 11.6585 13.2135 11.0011 13.5132 10.2775C13.8128 9.55385 13.967 8.7783 13.9668 7.9951V7.9951ZM6.91502 13.3642C5.62115 13.1032 4.46416 12.386 3.65497 11.3432C2.84579 10.3004 2.4383 9.0015 2.50682 7.68335C2.57533 6.36521 3.11527 5.11558 4.0282 4.16229C4.94114 3.20901 6.16626 2.61555 7.48021 2.49013C8.79416 2.3647 10.1094 2.71566 11.1862 3.47902C12.263 4.24238 13.0296 5.36728 13.3463 6.64866C13.6629 7.93005 13.5085 9.28256 12.9113 10.4596C12.314 11.6367 11.3136 12.5599 10.0924 13.0609C9.08667 13.4743 7.98083 13.5799 6.91502 13.3642V13.3642Z"
        />
        <motion.path
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            fill: isSelected ? "#fff" : "#242424",
            width: isSelected ? "40px" : "16px",
            height: isSelected ? "40px" : "16px",
          }}
          transition={{ duration: 0.5 }}
          strokeWidth={4}
          strokeDasharray="0 1"
          fill={isSelected ? "#fff" : "#242424"}
          d="M13.6465 13.6672C14.9581 12.3603 15.7759 10.639 15.9602 8.79662C16.1446 6.95427 15.6842 5.105 14.6576 3.56415C13.6309 2.0233 12.1016 0.886261 10.3303 0.346923C8.55906 -0.192415 6.65556 -0.10066 4.94439 0.606542C3.23323 1.31375 1.82034 2.5926 0.946657 4.22506C0.0729708 5.85752 -0.207418 7.74249 0.153301 9.55856C0.514019 11.3746 1.49351 13.0094 2.92475 14.184C4.356 15.3586 6.15038 16.0004 8.00193 16C10.1179 15.9996 12.1476 15.1608 13.6465 13.6672V13.6672ZM3.0226 13.2092C1.78035 11.9852 1.01944 10.3555 0.878652 8.61724C0.737869 6.879 1.22659 5.14808 2.25568 3.74016C3.28478 2.33223 4.78567 1.34113 6.48461 0.947606C8.18356 0.554087 9.96735 0.784372 11.5107 1.59646C13.054 2.40855 14.2539 3.74834 14.8917 5.37145C15.5295 6.99457 15.5626 8.79286 14.985 10.4384C14.4074 12.0838 13.2575 13.4669 11.7452 14.3352C10.2328 15.2036 8.45869 15.4994 6.74641 15.1686C5.33909 14.8969 4.04352 14.2152 3.0226 13.2092V13.2092Z"
        />
        <motion.path
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            fill: isSelected ? "#fff" : "#242424",
            width: isSelected ? "40px" : "16px",
            height: isSelected ? "40px" : "16px",
          }}
          transition={{ duration: 0.5 }}
          strokeWidth={4}
          strokeDasharray="0 1"
          fill={isSelected ? "#fff" : "#242424"}
          d="M11.9258 7.99972C11.9257 7.09105 11.6106 6.2105 11.0342 5.50811C10.4577 4.80572 9.65549 4.32495 8.76427 4.14771C7.87306 3.97047 6.94796 4.10773 6.1466 4.5361C5.34524 4.96448 4.7172 5.65746 4.3695 6.49697C4.02179 7.33648 3.97593 8.27059 4.23973 9.14013C4.50354 10.0097 5.06067 10.7608 5.81622 11.2656C6.57177 11.7704 7.47898 11.9977 8.38327 11.9086C9.28756 11.8195 10.133 11.4196 10.7755 10.777C11.1403 10.4124 11.4297 9.97941 11.627 9.50286C11.8244 9.02631 11.9259 8.51553 11.9258 7.99972V7.99972ZM7.28671 11.5668C6.4319 11.397 5.66656 10.9257 5.13023 10.2388C4.59391 9.55183 4.3223 8.69503 4.36495 7.82457C4.40759 6.95411 4.76163 6.12796 5.36254 5.49674C5.96344 4.86552 6.77118 4.47128 7.63849 4.38588C8.5058 4.30049 9.37491 4.52962 10.0874 5.03152C10.7999 5.53342 11.3082 6.27466 11.5198 7.12009C11.7314 7.96552 11.6321 8.85883 11.2401 9.63717C10.848 10.4155 10.1893 11.027 9.38401 11.3603C8.72072 11.635 7.99085 11.7068 7.28671 11.5668V11.5668Z"
        />
        <motion.path
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            fill: isSelected ? "#fff" : "#242424",
            width: isSelected ? "40px" : "16px",
            height: isSelected ? "40px" : "16px",
          }}
          transition={{ duration: 0.5 }}
          strokeWidth={4}
          strokeDasharray="0 1"
          fill={isSelected ? "#fff" : "#242424"}
          d="M9.91973 8.02326C9.92607 7.57942 9.77809 7.14715 9.50108 6.80031C9.22406 6.45346 8.8352 6.21357 8.40094 6.12163C7.96668 6.02969 7.51396 6.09139 7.12015 6.2962C6.72634 6.50102 6.41587 6.83623 6.24179 7.24456C6.0677 7.65289 6.04081 8.109 6.16571 8.53495C6.29061 8.96091 6.55955 9.33027 6.92657 9.57994C7.29359 9.8296 7.73591 9.94408 8.17797 9.90379C8.62003 9.86351 9.03438 9.67098 9.35023 9.35908C9.70807 9.00585 9.91263 8.52604 9.91973 8.02326ZM7.66109 9.75838C7.24582 9.67521 6.87425 9.44562 6.61408 9.11144C6.35391 8.77726 6.22245 8.36073 6.24365 7.93775C6.26486 7.51476 6.43732 7.11347 6.72961 6.80699C7.0219 6.50051 7.41457 6.30923 7.83607 6.26801C8.25758 6.22679 8.67987 6.33837 9.02599 6.58242C9.37212 6.82647 9.61906 7.18675 9.72181 7.59761C9.82455 8.00848 9.77628 8.44258 9.58578 8.82083C9.39527 9.19909 9.07522 9.49631 8.68393 9.65836C8.36037 9.79405 8.00372 9.83028 7.65948 9.76241L7.66109 9.75838Z"
        />
      </motion.g>
    </motion.svg>
  );
};
export const Info: React.FC<IInfoItem> = ({ children }) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <motion.div
      animate={{
        y: [windowSize.current[1], 0],
        width: "100%",
        height: "100%",
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
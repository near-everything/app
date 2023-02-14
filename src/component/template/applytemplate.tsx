import React from "react";
import { ReactComponent as Arrow } from "assets/icon/close.svg";
import { ReactComponent as Add } from "assets/icon/add.svg";
import { ReactComponent as Shirt } from "assets/icon/templates/shirt.svg";
import { ReactComponent as Pants } from "assets/icon/templates/pants.svg";

type Props = {
  setClose: (close: boolean) => void;
};

function Applytemplate({ setClose }: Props) {
  return (
    <div className="bg-gray-95 h-full px-[16px] backdrop-blur-[10px] relative z-20">
      <div className=" flex items-center justify-between pt-[16px]  relative">
        <div
          className=" bg-white20 rounded-[50%] p-[14px]  cursor-pointer "
          onClick={() => setClose(false)}
        >
          <Arrow className="text-white" />
        </div>
        <p className="text-title18">apply template</p>
        <div className=" bg-white20 rounded-[50%] p-[14px]  opacity-0 ">
          <Arrow className="text-white" />
        </div>
      </div>
      <div className=" mt-[16px]">
        <p className=" text-Body14 text-gray-40">
          templates add pre-made set of properties to your things and help you
          structure data in the most efficient way.
        </p>
      </div>
      <div className=" mt-[17px] flex items-center justify-start">
        <div className=" bg-white rounded-[50%] p-[10px]">
          <Add className=" text-black w-[20px] h-[20px]" />
        </div>
        <p className=" text-Button16 ml-[8px]">new template</p>
      </div>
      <p className=" mt-[24px] text-Body16 mb-[16px]">our collection</p>
      <div className=" overflow-auto h-[60%]">
        {temps.map((item, id) => (
          <div key={id} className="flex items-center justify-start mb-[8px]">
            <div className=" bg-gray-90 rounded-[18px] w-[48px] h-[48px] flex items-center justify-center">
              {item?.ico}
            </div>
            <div className=" ml-[10px] flex flex-col items-start justify-start">
              <p className="text-Button16 mb-[2px]">{item.title}</p>
              <p className="text-caption12 mb-[2px] text-gray-30">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Applytemplate;

const temps = [
  {
    ico: <Shirt />,
    title: "shirt",
    description: "color, brand, size, price, material",
  },
  {
    ico: <Pants />,
    title: "pants",
    description: "color, brand, size, price, material",
  },
  {
    ico: <Shirt />,
    title: "dress",
    description: "color, brand, size, price, material",
  },
  {
    ico: <Shirt />,
    title: "shoes",
    description: "color, brand, size, price, material",
  },
  {
    ico: <Shirt />,
    title: "glasses",
    description: "color, brand, size, price, material",
  },
  {
    ico: <Shirt />,
    title: "jewellery",
    description: "color, brand, size, price, material",
  },
  {
    ico: <Shirt />,
    title: "bag",
    description: "color, brand, size, price, material",
  },
  {
    ico: <Shirt />,
    title: "book",
    description: "color, brand, size, price, material",
  },
  {
    ico: <Shirt />,
    title: "videogame",
    description: "color, brand, size, price, material",
  },
  {
    ico: <Shirt />,
    title: "videogame",
    description: "color, brand, size, price, material",
  },
  {
    ico: <Shirt />,
    title: "videogame",
    description: "color, brand, size, price, material",
  },
];

import React, { useState } from "react";
import { ReactComponent as Arrow } from "assets/icon/close.svg";
import { ReactComponent as Add } from "assets/icon/add.svg";
import { ReactComponent as Shirt } from "assets/icon/templates/shirt.svg";
import { ReactComponent as Pants } from "assets/icon/templates/pants.svg";
import { ReactComponent as Dress } from "assets/icon/templates/dress.svg";
import { ReactComponent as Shoes } from "assets/icon/templates/shoes.svg";
import { ReactComponent as Glasess } from "assets/icon/templates/glasess.svg";
import { ReactComponent as Jewellery } from "assets/icon/templates/jewellery.svg";
import { ReactComponent as Bag } from "assets/icon/templates/bag.svg";
import { ReactComponent as Book } from "assets/icon/templates/book.svg";
import { ReactComponent as Videogame } from "assets/icon/templates/videogame.svg";
import { ReactComponent as Postcards } from "assets/icon/templates/postcards.svg";
import { ReactComponent as Collectibles } from "assets/icon/templates/collectibles.svg";
import { ReactComponent as Art } from "assets/icon/templates/art.svg";
import { ReactComponent as Furniture } from "assets/icon/templates/furniture.svg";
import { ReactComponent as Technology } from "assets/icon/templates/technology.svg";
import { ReactComponent as Tableware } from "assets/icon/templates/tableware.svg";
import { ReactComponent as Tools } from "assets/icon/templates/tools.svg";
import Selectedtemplate from "./selectedtemplate";
import { Select, TemplateSelect, Newtemplateanimation } from "./animations";
import Newtemplate from "./newtemplate";
type Props = {
  setClose: (close: boolean) => void;
  setTemplate: (close: string) => void;
};

function Applytemplate({ setClose, setTemplate }: Props) {
  const [temp, setTemp] = useState<string>();
  const [selected, setSelected] = useState<boolean>(false);
  const [newtemp, setNewtemp] = useState<boolean>(false);
  const handleClick = () => {
    setNewtemp(true);
  };
  return (
    <div className="bg-gray-95 h-full px-[16px] backdrop-blur-[10px] relative z-20">
      {newtemp ? (
        <Newtemplateanimation>
          <Newtemplate setClose={setNewtemp} />
        </Newtemplateanimation>
      ) : (
        <>
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
              templates add pre-made set of properties to your things and help
              you structure data in the most efficient way.
            </p>
          </div>
          <div
            className=" mt-[17px] flex items-center justify-start"
            onClick={handleClick}
          >
            <div className=" bg-white rounded-[50%] p-[10px]">
              <Add className=" text-black w-[20px] h-[20px]" />
            </div>
            <p className=" text-Button16 ml-[8px]">new template</p>
          </div>
          <p className=" mt-[24px] text-Body16 mb-[16px]">our collection</p>
          <div className=" overflow-auto h-[60%]">
            {temps.map((item, id) => (
              <div
                key={id}
                className="flex items-center justify-start mb-[8px]"
                onClick={() => {
                  setTemp(item.title);
                  setSelected(true);
                }}
              >
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
        </>
      )}

      {temp && (
        <Select>
          <Selectedtemplate
            setClose={setTemp}
            temp={temp}
            setSelected={setSelected}
            setTemplate={setTemplate}
            apply={setClose}
          />
        </Select>
      )}
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
    ico: <Dress />,
    title: "dress",
    description: "color, brand, size, price, material, length, occasion",
  },
  {
    ico: <Shoes />,
    title: "shoes",
    description: "color, brand, size, price, material",
  },
  {
    ico: <Glasess />,
    title: "glasses",
    description: "color, brand, price, type",
  },
  {
    ico: <Jewellery />,
    title: "jewellery",
    description: "color, metal, gem, brand, price, size",
  },
  {
    ico: <Bag />,
    title: "bag",
    description: "color, brand, price, material, occasion",
  },
  {
    ico: <Book />,
    title: "book",
    description: "title, author, genre, price",
  },
  {
    ico: <Videogame />,
    title: "videogame",
    description: "title, developer, platform, genre, price",
  },
  {
    ico: <Postcards />,
    title: "music album",
    description: "title, artist, genre, type, price",
  },
  {
    ico: <Collectibles />,
    title: "collectibles",
    description: "title, color, type, collection, price",
  },
  {
    ico: <Art />,
    title: "art",
    description: "title, color, artist, price, size",
  },
  {
    ico: <Furniture />,
    title: "furniture",
    description: "color, brand, model, type, price, room, material",
  },
  {
    ico: <Technology />,
    title: "technology",
    description: "color, brand, model, type, price, room, material",
  },
  {
    ico: <Tableware />,
    title: "tableware",
    description: "color, brand, type, material, price",
  },
  {
    ico: <Tools />,
    title: "tools",
    description: "color, type, brand, price",
  },
];

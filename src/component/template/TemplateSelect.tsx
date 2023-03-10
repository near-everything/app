import { ReactComponent as Add } from "assets/icon/add.svg";
import { ReactComponent as Close } from "assets/icon/close.svg";
import { ReactComponent as Art } from "assets/icon/templates/art.svg";
import { ReactComponent as Bag } from "assets/icon/templates/bag.svg";
import { ReactComponent as Book } from "assets/icon/templates/book.svg";
import { ReactComponent as Collectibles } from "assets/icon/templates/collectibles.svg";
import { ReactComponent as Dress } from "assets/icon/templates/dress.svg";
import { ReactComponent as Furniture } from "assets/icon/templates/furniture.svg";
import { ReactComponent as Glasess } from "assets/icon/templates/glasess.svg";
import { ReactComponent as Jewellery } from "assets/icon/templates/jewellery.svg";
import { ReactComponent as Pants } from "assets/icon/templates/pants.svg";
import { ReactComponent as Postcards } from "assets/icon/templates/postcards.svg";
import { ReactComponent as Shirt } from "assets/icon/templates/shirt.svg";
import { ReactComponent as Shoes } from "assets/icon/templates/shoes.svg";
import { ReactComponent as Tableware } from "assets/icon/templates/tableware.svg";
import { ReactComponent as Technology } from "assets/icon/templates/technology.svg";
import { ReactComponent as Tools } from "assets/icon/templates/tools.svg";
import { ReactComponent as Videogame } from "assets/icon/templates/videogame.svg";
import RoundedBtn from "component/shared/btn/RoundedBtn";
import { ReactElement } from "react";
import Header from "../shared/header";

type Props = {
  setTemplate: (template: Template | null) => void;
  setSelectedTemplate: (template: Template | null) => void;
  hideApplyTemplate: () => void;
  showTemplateEditor: () => void;
};

function TemplateSelect({
  setTemplate,
  setSelectedTemplate,
  hideApplyTemplate,
  showTemplateEditor,
}: Props) {
  return (
    <div className="bg-gray-95 h-full backdrop-blur-[10px] relative z-20">
      {/* Header */}
      <Header
        elementLeft={
          <RoundedBtn
            icon={<Close className="text-white" />}
            onClick={() => {
              hideApplyTemplate();
            }}
          />
        }
        elementCenter={<p className="text-title18">apply template</p>}
      />
      {/* Header end */}
      {/* Description */}
      <div className=" px-[16px]">
        <div className=" mt-[16px]">
          <p className=" text-Body14 text-gray-40">
            templates add pre-made set of properties to your things and help you
            structure data in the most efficient way.
          </p>
        </div>
        {/* End Description */}
        {/* New Template Button */}
        {/* <div
          className=" mt-[17px] flex items-center justify-start"
          onClick={() => {
            setSelectedTemplate(null);
            showTemplateEditor();
          }}
        >
          <div className=" bg-white rounded-[50%] p-[10px]">
            <Add className=" text-black w-[20px] h-[20px]" />
          </div>
          <p className=" text-Button16 ml-[8px]">new template</p>
        </div> */}
        {/* End New Template Button */}
        <p className=" mt-[24px] text-Body16 mb-[16px]">our collection</p>
        {/* Template Buttons */}
        <div className=" overflow-auto h-[60%]">
          {templates.map((temp, id) => (
            <div
              key={id}
              className="flex items-center justify-start mb-[8px]"
              onClick={() => {
                setTemplate(temp);
                hideApplyTemplate();
              }}
            >
              <div className=" bg-gray-90 rounded-[18px] w-[48px] h-[48px] flex items-center justify-center">
                {temp.icon}
              </div>
              <div className=" ml-[10px] flex flex-col items-start justify-start">
                <p className="text-Button16 mb-[2px]">{temp.title}</p>
                <p className="text-caption12 mb-[2px] text-gray-30">
                  {temp.attributes.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TemplateSelect;

export type Template = {
  icon: ReactElement;
  title: string;
  attributes: string[];
};

const templates: Template[] = [
  {
    icon: <Shirt />,
    title: "shirt",
    attributes: ["color", "brand", "size", "price", "material"],
  },
  {
    icon: <Pants />,
    title: "pants",
    attributes: ["color", "brand", "size", "price", "material"],
  },
  {
    icon: <Dress />,
    title: "dress",
    attributes: [
      "color",
      "brand",
      "size",
      "price",
      "material",
      "length",
      "occasion",
    ],
  },
  {
    icon: <Shoes />,
    title: "shoes",
    attributes: ["color", "brand", "size", "price", "material"],
  },
  {
    icon: <Glasess />,
    title: "glasses",
    attributes: ["color", "brand", "price", "type"],
  },
  {
    icon: <Jewellery />,
    title: "jewellery",
    attributes: ["color", "metal", "gem", "brand", "price", "size"],
  },
  {
    icon: <Bag />,
    title: "bag",
    attributes: ["color", "brand", "price", "material", "occasion"],
  },
  {
    icon: <Book />,
    title: "book",
    attributes: ["title", "author", "genre", "price"],
  },
  {
    icon: <Videogame />,
    title: "videogame",
    attributes: ["title", "developer", "platform", "genre", "price"],
  },
  {
    icon: <Postcards />,
    title: "music album",
    attributes: ["title", "artist", "genre", "type", "price"],
  },
  {
    icon: <Collectibles />,
    title: "collectibles",
    attributes: ["title", "color", "type", "collection", "price"],
  },
  {
    icon: <Art />,
    title: "art",
    attributes: ["title", "color", "artist", "price", "size"],
  },
  {
    icon: <Furniture />,
    title: "furniture",
    attributes: [
      "color",
      "brand",
      "model",
      "type",
      "price",
      "room",
      "material",
    ],
  },
  {
    icon: <Technology />,
    title: "technology",
    attributes: [
      "color",
      "brand",
      "model",
      "type",
      "price",
      "room",
      "material",
    ],
  },
  {
    icon: <Tableware />,
    title: "tableware",
    attributes: ["color", "brand", "type", "material", "price"],
  },
  {
    icon: <Tools />,
    title: "tools",
    attributes: ["color", "type", "brand", "price"],
  },
];

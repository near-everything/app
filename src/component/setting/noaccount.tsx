import React from "react";
import { MainBtn, InteractionSecondarywhite } from "component/shared/btn";
import { ReactComponent as Edit } from "assets/icon/setting/edit.svg";
import { ReactComponent as Happy } from "assets/icon/setting/happy.svg";
import { ReactComponent as Right } from "assets/icon/setting/arrowright.svg";
import { ReactComponent as Out } from "assets/icon/setting/arrowout.svg";
type Props = {};

const Noaccount = (props: Props) => {
  return (
    <>
      <div className="bg-gray-95 rounded-[22px]">
        <div className=" pt-[12px] px-[12px]">
          <pre className=" text-title18">
            {"create an account within everyhting" +
              "\n" +
              "ecosystem for better experience!"}
          </pre>
          <div className=" mt-[16px]">
            {items.map((item, id) => (
              <li className=" text-Body14 text-gray-40" key={id}>
                {item?.name}
              </li>
            ))}
          </div>
          <div className=" my-[16px]">
            <p className=" text-caption12 text-gray-40">*roadmap features</p>
          </div>
          <div className=" flex items-center justify-center pb-[4px]">
            <MainBtn type="submit" disabled={false} size="M" className="w-full">
              <p>create account</p>
            </MainBtn>
          </div>
        </div>
      </div>
      <div className=" px-[12px] mt-[16px]">
        {menu.map((index, arr) => (
          <div
            key={arr}
            className="flex items-center justify-between pb-[16px] border-b border-gray-90 border-solid mb-[16px]"
          >
            <div className=" flex items-center justify-start">
              <div className=" bg-gray-90 rounded-[15px] p-[10px] mr-[8px]">
                {index?.ico}
              </div>
              <p className=" text-Button16"> {index?.name}</p>
            </div>
            <div className=" cursor-pointer">{index?.arrow}</div>
          </div>
        ))}
        <div className=" flex items-center justify-between">
          <div>
            <p className=" text-Body16">clear my inventory</p>
            <pre className="text-caption12 mt-[4px] text-gray-40">
              {"instantly delete everything from your" +
                "\n" +
                "inventory. can’t be undone."}
            </pre>
          </div>
          <InteractionSecondarywhite
            type="submit"
            disabled={false}
            className="py-[10px] text-Body14 px-[24px]"
          >
            <p>clear</p>
          </InteractionSecondarywhite>
        </div>
      </div>
    </>
  );
};

export default Noaccount;
const items = [
  {
    name: "backup your inventory",
  },
  {
    name: "share profile with friends*",
  },
  {
    name: "find things near you*",
  },
  {
    name: "access to marketplace features*",
  },
];
const menu = [
  {
    name: "edit profile",
    ico: <Edit />,
    arrow: <Right />,
  },
  {
    name: "about everything",
    ico: <Happy />,
    arrow: <Out />,
  },
];

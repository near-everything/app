import React, { useState } from "react";
import { ReactComponent as User } from "assets/icon/profile/user.svg";
import { ReactComponent as Setting } from "assets/icon/profile/setting.svg";
import Footer from "./footer";
import Invite from "./invite";
import { Info } from "component/create/animations";
import { photos } from "component/explore/photos";
import Collectiongallery from "./collectiongallery";
import { useNavigate } from "react-router-dom";

type Props = {};

const Index = (props: Props) => {
  const [data, setData] = useState(photos);
  const [action, setAction] = useState<string>("");
  const [search, setSearch] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div className=" w-full h-full relative">
      <div className=" flex items-center justify-between px-[16px] py-[4px]">
        <div
          className=" bg-gray-10 p-[14px] rounded-[50%] cursor-pointer"
          onClick={() => setAction("user")}
        >
          <User />
        </div>
        <div className=" border-gray-20 border-solid w-[48px] h-[48px] border rounded-[50%]"></div>
        <div
          className=" bg-gray-10 p-[14px] rounded-[50%]"
          onClick={() =>
            navigate("/setting", { replace: true, state: { data: data } })
          }
        >
          <Setting />
        </div>
      </div>
      <div className=" mt-[16px] flex items-center justify-center ">
        <p className=" text-black text-title24">my everything</p>
      </div>
      <div className="mt-[40px] mb-[12px] grid grid-cols-2 text-center w-[85%] mx-auto">
        <p className="text-black text-Body16">collections</p>
        <p className="text-black text-Body16">things</p>
      </div>
      <div className=" bg-black rounded-t-[22px] w-full h-full relative">
        {data.length === 0 ? (
          <div className=" bg-gray-95 rounded-[22px] h-[55%] relative mx-[4px] mt-[4px]">
            <div className=" absolute top-[50%] w-full left-[50%] -translate-x-center -translate-y-center ">
              <div className=" flex flex-col items-center justify-center">
                <p className=" text-gray-40 text-Body14">nothing here yet :(</p>
                <p className=" text-title24">let’s add your first thing</p>
                <pre className=" mt-[24px] text-gray-40 text-Body14 text-center">
                  {"click the plus button on the" + "\n" + "navbar to start"}
                </pre>
              </div>
            </div>
          </div>
        ) : (
          <Collectiongallery />
        )}
      </div>
      <Footer />
      {action === "user" && (
        <Info>
          <Invite setClose={setAction} />
        </Info>
      )}
    </div>
  );
};

export default Index;

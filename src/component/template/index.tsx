import { ReactComponent as Close } from "assets/icon/close.svg";
import { MainBtn } from "component/shared/btn";
import RoundedBtn from "component/shared/btn/RoundedBtn";
import Createlanding from "component/shared/createlanding";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dbPromise } from "services/db";
import Header from "../shared/header";
import ImageGrid from "./ImageGrid";
import TemplateSelectBtn from "./ApplyTemplateBtn";
import { useApplyTemplate } from "contexts/ApplyTemplateContext";

type Props = {
  list: string[];
  url: string | null;
  bulk: boolean;
  setClose: (close: boolean) => void;
  setUrl: (close: string | null) => void;
  removeImage: (id: number) => void;
};

// This shouldn't be the "template" screen, this should just be an extension of create
function Index({ list, url, bulk, setClose, setUrl, removeImage }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const { template }: any = useApplyTemplate();
  const navigate = useNavigate();

  const handlesave = async () => {
    // this will need to know about bulk
    setLoading(true);
    const thingId = await (
      await dbPromise
    ).add("things", {
      name: "test",
      template: template?.title,
      attributes: [
        {
          label: "test",
          value: "test",
          hidden: false,
        },
      ],
      media: list,
    });
    navigate(`/thing/${thingId}`, { replace: true });
  };

  if (loading) {
    return (
      <div className="bg-black h-full relative">
        <Createlanding/>
      </div>
    );
  }

  return (
    <div className="bg-black h-full relative justify-between flex flex-col">
      <Header
        elementLeft={
          <RoundedBtn
            icon={<Close className="text-white" />}
            onClick={() => {
              setClose(false);
              setUrl(null);
            }}
          />
        }
      />
      <div className="mx-1 flex grow flex-col">
        <div className=" px-[12px]">
          <p className=" mt-[16px] text-title28">what is this thing?</p>
          <p className=" mt-[16px] text-Body14 text-gray-40">
            add template that describes your thing
          </p>
          <p className=" mt-[8px] mb-[16px] text-Button14 ">
            what are templates?
          </p>
        </div>
        <TemplateSelectBtn template={template} />
        <ImageGrid list={list} removeImage={removeImage} />
      </div>
      <div className="w-full flex items-center justify-center my-[14px]">
        <MainBtn
          type="button"
          disabled={false}
          size="L"
          className="px-[24px] w-full"
          onClick={handlesave}
        >
          <p>save thing</p>
        </MainBtn>
      </div>
    </div>
  );
}

export default Index;

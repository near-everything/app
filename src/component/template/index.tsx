import { ReactComponent as Close } from "assets/icon/close.svg";
import { MainBtn } from "component/shared/btn";
import RoundedBtn from "component/shared/btn/RoundedBtn";
import Createlanding from "component/shared/createlanding";
import { useState } from "react";
import Header from "../shared/header";
import { Apply } from "./animations";
import ApplyTemplate, { Template } from "./ApplyTemplate";
import ImageGrid from "./ImageGrid";
import TemplateSelectBtn from "./TemplateSelectBtn";

type Props = {
  list: string[];
  url: string | null;
  bulk: boolean;
  setClose: (close: boolean) => void;
  setUrl: (close: string | null) => void;
  removeImage: (id: number) => void;
};

function Index({ list, url, bulk, setClose, setUrl, removeImage }: Props) {
  const [isApplyTemplateVisible, setApplyTemplateVisible] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [template, setTemplate] = useState<Template | null>(null);

  const handleSave = () => {
    // this will need to know about bulk
    setLoading(true);
  };

  const showApplyTemplate = () => {
    setApplyTemplateVisible(true);
  };

  const hideApplyTemplate = () => {
    setApplyTemplateVisible(false);
  };

  if (loading) {
    return (
      <div className="bg-black h-full relative">
        <Createlanding url={url} template={template?.title || ""} />
      </div>
    );
  }

  return (
    <div className="bg-black h-full relative justify-between flex flex-col">
      {/* Header */}
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
      {/* Body */}
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
        <TemplateSelectBtn
          template={template}
          setTemplate={setTemplate}
          setShowApplyTemplate={showApplyTemplate}
        />
        <ImageGrid list={list} removeImage={removeImage} />
      </div>
      {/* Save Thing */}
      <div className="w-full flex items-center justify-center my-[14px]">
        <MainBtn
          type="button"
          disabled={false}
          size="L"
          className="px-[24px] w-full"
          onClick={handleSave}
        >
          <p>save thing</p>
        </MainBtn>
      </div>
      {/* Apply Template Screen -- comes up from the bottom */}
      {isApplyTemplateVisible && (
        <Apply>
          <ApplyTemplate
            hideApplyTemplate={hideApplyTemplate}
            setTemplate={setTemplate}
          />
        </Apply>
      )}
    </div>
  );
}

export default Index;

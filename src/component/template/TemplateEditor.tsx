import { ReactComponent as Add } from "assets/icon/add.svg";
import { ReactComponent as Arrow } from "assets/icon/arrowleft.svg";
import { ReactComponent as Eraser } from "assets/icon/eraser.svg";
import { ReactComponent as Menue } from "assets/icon/menue.svg";
import { ReactComponent as Text } from "assets/icon/text.svg";
import { ReactComponent as Trash } from "assets/icon/trash.svg";
import { MainBtn } from "component/shared/btn";
import RoundedBtn from "component/shared/btn/RoundedBtn";
import Header from "component/shared/header";
import { useState } from "react";
import { Template } from "./ApplyTemplate";

type Props = {
  template: Template | null;
  setTemplate: (template: Template | null) => void;
  hideTemplateEditor: () => void;
  hideApplyTemplate: () => void;
};

function TemplateEditor({ template, setTemplate, hideTemplateEditor, hideApplyTemplate }: Props) {
  const [list, setList] = useState<string[] | null>(
    template?.attributes || null
  );

  const handleRemove = (id: number) => {
    setList(list?.filter((value: string, i: number) => i !== id) || null);
  };

  return (
    <div className="bg-gray-95 h-full overflow-auto backdrop-blur-[10px] relative z-20">
      <Header
        elementLeft={
          <RoundedBtn
            icon={<Arrow className="text-white" />}
            onClick={hideTemplateEditor}
          />
        }
        elementCenter={
          <p className="text-title18">{template?.title || "new template"}</p>
        }
        elementRight={
          <MainBtn
            type="button"
            disabled={false}
            size="M"
            className=" px-[24px]"
            onClick={() => {
              setTemplate(template);
              hideApplyTemplate();
            }}
          >
            <p>apply</p>
          </MainBtn>
        }
      />
      <div className=" mt-[24px] px-[4px]">
        {list?.map((attr, id) => (
          <div
            key={id}
            className="bg-gray-90 rounded-[16px] flex items-start justify-between mb-[8px] px-[8px] py-[16px]"
          >
            <div className="flex items-start justify-start w-[90%]">
              <Menue />
              <div
                className={
                  " flex flex-col items-start justify-start ml-[12px]  w-full"
                }
              >
                <p
                  className={
                    " text-Body16 pb-[16px] border-b border-solid border-b-gray-80 w-full "
                  }
                >
                  {attr}
                </p>
                <p className=" mt-[16px] text-gray-40 text-Body16 text-left">
                  Default value (optional)
                </p>
              </div>
            </div>
            <Trash className=" text-red" onClick={() => handleRemove(id)} />
          </div>
        ))}
      </div>
      <div className=" absolute bottom-[24px] w-[60%] left-0 right-0 bg-black80 rounded-[20px] mx-auto backdrop-blur-[15px] px-[16px] py-[8px] flex items-center justify-between">
        <Eraser />
        <Text />
        <Add className=" text-white w-[32px] h-[32px]" />
      </div>
    </div>
  );
}

export default TemplateEditor;

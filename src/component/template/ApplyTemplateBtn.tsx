import { ReactComponent as Clipboard } from "assets/icon/clipboard.svg";
import { ReactComponent as Edit } from "assets/icon/edit.svg";
import { ReactComponent as Trash } from "assets/icon/trash.svg";
import { useApplyTemplate } from "contexts/ApplyTemplateContext";
import { Template } from "./TemplateSelect";

type Props = {
  template: Template | null;
};

function ApplyTemplateBtn({ template }: Props) {
  const { resetTemplate, showApplyTemplate }: any = useApplyTemplate();

  return (
    <>
      <div className="w-full h-[56px] mb-[16px]">
        {template ? (
          <div className="h-full bg-gray-95 rounded-[20px] flex items-center justify-between p-[4px]">
            <div className="flex items-center justify-start text-Button16 text-gray-30">
              <div className=" bg-gray-90 rounded-[18px] w-[48px] h-[48px] flex items-center justify-center">
                {template?.icon}
              </div>
              <div className="ml-[10px]">{template?.title}</div>
            </div>
            <div className="flex items-center justify-start">
              <Trash className=" text-red" onClick={resetTemplate} />
              <Edit
                className=" ml-[8px] mr-[4px]"
                onClick={showApplyTemplate}
              />
            </div>
          </div>
        ) : (
          <div
            className="h-full border border-gray-80 border-dashed rounded-[20px] flex items-center justify-center"
            onClick={showApplyTemplate}
          >
            <p className="text-gray-30 text-Button16">apply template</p>
            <Clipboard className="text-gray-30 ml-[10px]" />
            <p className=" ml-[10px] text-gray-50 text-Button14">(optional)</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ApplyTemplateBtn;

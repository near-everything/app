import { ReactElement, useState } from "react";
import TemplateEditor from "./TemplateEditor";
import TemplateSelect from "./TemplateSelect";

type Props = {
  template: Template | null;
  hideApplyTemplate: () => void;
  setTemplate: (template: Template | null) => void;
};

function ApplyTemplate({ template, setTemplate, hideApplyTemplate }: Props) {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [isTemplateEditorVisible, setTemplateEditorVisible] =
    useState<boolean>(false);

  const showTemplateEditor = () => {
    setTemplateEditorVisible(true);
  };

  const hideTemplateEditor = () => {
    setTemplateEditorVisible(false);
  };

  return (
    <div className="bg-gray-95 h-full backdrop-blur-[10px] relative z-20">
      {isTemplateEditorVisible ? (
        <TemplateEditor
        selectedTemplate={selectedTemplate}
          setTemplate={setTemplate}
          hideTemplateEditor={hideTemplateEditor}
          hideApplyTemplate={hideApplyTemplate}
        />
      ) : (
        <TemplateSelect
          setSelectedTemplate={setSelectedTemplate}
          showTemplateEditor={showTemplateEditor}
          hideApplyTemplate={hideApplyTemplate}
        />
      )}
    </div>
  );
}

export default ApplyTemplate;

export type Template = {
  icon: ReactElement;
  title: string;
  attributes: string[];
};

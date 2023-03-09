import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Apply } from "../component/template/animations";
import ApplyTemplate, { Template } from "../component/template/ApplyTemplate";

type Props = {};

type ApplyTemplateContextType = {
  template: Template | null;
  showApplyTemplate: () => void;
  resetTemplate: () => void;
};

export const ApplyTemplateContext = createContext<ApplyTemplateContextType | null>(null);

export const ApplyTemplateProvider = ({ children }: PropsWithChildren<Props>) => {
  const [isApplyTemplateVisible, setApplyTemplateVisible] =
    useState<boolean>(false);
  const [template, setTemplate] = useState<Template | null>(null);

  // May want to reset the template in useEffect? Not sure if this is affected...
  // useEffect(() => {}, []);

  const showApplyTemplate = () => {
    setApplyTemplateVisible(true);
  };

  const hideApplyTemplate = () => {
    setApplyTemplateVisible(false);
  };

  const resetTemplate = () => {
    setTemplate(null);
  }

  return (
    <ApplyTemplateContext.Provider
      value={{
        template,
        resetTemplate,
        showApplyTemplate
      }}
    >
      <>
        {children}
        {isApplyTemplateVisible && ( // apply template screen -- comes in from the bottom
          <Apply>
            <ApplyTemplate
              template={template}
              setTemplate={setTemplate}
              hideApplyTemplate={hideApplyTemplate}
            />
          </Apply>
        )}
      </>
    </ApplyTemplateContext.Provider>
  );
};

export const useApplyTemplate = () => useContext(ApplyTemplateContext);

// Do I want to do it as a context or s a route?

// I should do a route... so that the id determines what thing is being accessed, this way it doesn't have to be accessed by the navigate...
// Maybe a combination of the two

// Container, let's forget about that for right now...

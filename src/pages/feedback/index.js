import React from "react";
import ContactForm from "../../components/Feedback/ContactForm";
import Layout from "../../containers/Layout";
import ModuleContainer from "../../containers/ModuleContainer";

function Feedback() {
  return (
    <>
      <div className="flex flex-col">
        <ContactForm />
      </div>
    </>
  );
}

Feedback.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ModuleContainer moduleName={"feedback"} moduleColor={"black"}>
        {page}
      </ModuleContainer>
    </Layout>
  );
};
export default Feedback;

import React from "react";
import Layout from "../../containers/Layout";
import ModuleContainer from "../../containers/ModuleContainer";
import Concern from "../../components/Feedback/Concern";
import Help from "../../components/Feedback/Help";
import Idea from "../../components/Feedback/Idea";
import Question from "../../components/Feedback/Question";

function Feedback() {
  return (
    <>
      <div className="flex flex-col">
        <Question />
        <br />
        <Concern />
        <br />
        <Idea />
        <br />
        <Help />
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

import React from "react";
import Layout from "../../containers/Layout";
import ModuleContainer from "../../containers/ModuleContainer";

function Things() {
  return <></>;
}

Things.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ModuleContainer moduleName={"things"} moduleColor={"green"}>
        {page}
      </ModuleContainer>
    </Layout>
  );
};
export default Things;

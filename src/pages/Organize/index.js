import React from "react";
import Layout from "../../containers/Layout";
import ModuleContainer from "../../containers/ModuleContainer";

function Organize() {
  return <></>;
}

Organize.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ModuleContainer moduleName={"organize"} moduleColor={"yellow"}>
        {page}
      </ModuleContainer>
    </Layout>
  );
};
export default Organize;
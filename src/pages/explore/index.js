import React from "react";
import Layout from "../../containers/Layout";
import ModuleContainer from "../../containers/ModuleContainer";

function Explore() {
  return <></>;
}

Explore.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ModuleContainer moduleName={"explore"} moduleColor={"blue"}>
        {page}
      </ModuleContainer>
    </Layout>
  );
};
export default Explore;
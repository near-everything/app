import React from "react";
import Layout from "../../containers/Layout";
import ModuleContainer from "../../containers/ModuleContainer";

function Requests() {
  return <></>;
}

Requests.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ModuleContainer moduleName={"requests"} moduleColor={"red"}>
        {page}
      </ModuleContainer>
    </Layout>
  );
};
export default Requests;

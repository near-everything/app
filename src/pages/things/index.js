import React from "react";
import Layout from "../../containers/Layout";
import ModuleContainer from "../../containers/ModuleContainer";

function Items() {
  return <></>;
}

Items.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ModuleContainer moduleName={"items"} moduleColor={"green"}>
        {page}
      </ModuleContainer>
    </Layout>
  );
};
export default Items;

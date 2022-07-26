import React from "react";
import Layout from "../containers/Layout";
import ModuleContainer from "../containers/ModuleContainer";

function Home() {
  return <></>;
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ModuleContainer moduleName={"home"} moduleColor={"black"}>
        {page}
      </ModuleContainer>
    </Layout>
  );
};
export default Home;

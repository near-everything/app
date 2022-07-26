import Link from "next/link";
import React from "react";
import Button from "../../components/Button";
import Layout from "../../containers/Layout";
import ModuleContainer from "../../containers/ModuleContainer";

function Explore() {
  return (
    <>
      <div className="flex flex-1 flex-col">
        <Link href="/things">
          <Button className="w-full h-16 mb-2">Things</Button>
        </Link>
        <Link href="/requests">
          <Button className="w-full h-16 mb-2">Requests</Button>
        </Link>
      </div>
    </>
  );
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

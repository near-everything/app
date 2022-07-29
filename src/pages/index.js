import Link from "next/link";
import React from "react";
import Button from "../components/Button";
import Concern from "../components/Feedback/Concern";
import Help from "../components/Feedback/Help";
import Idea from "../components/Feedback/Idea";
import Layout from "../containers/Layout";
import ModuleContainer from "../containers/ModuleContainer";

function Home() {
  return (
    <>
      <div className="flex flex-1 flex-col">
        <Link href="/profile">
          <Button className="w-full h-16 mb-2">Profile</Button>
        </Link>
        <Link href="/settings">
          <Button className="w-full h-16 mb-2">Settings</Button>
        </Link>
        <Help />
        <br />
        <Idea />
        <br />
        <Concern />
        <br />
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ModuleContainer moduleName={"everything"} moduleColor={"black"}>
        {page}
      </ModuleContainer>
    </Layout>
  );
};
export default Home;

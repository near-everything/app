import React from "react";
import Header from "../components/Header";
import Layout from "../containers/Layout";

function Home() {
  return (
    <>
      <Header title="everything | feed" />
      <div className="flex h-full w-full justify-center items-center">
        <div className="text-center">
          <p>this is a work in progress</p>
          <p>have feedback or want to help?</p>
          <a
            href="https://about.everything.dev/contact"
            target={"_blank"}
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            send us a message
          </a>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Home;

import React from "react";
import Header from "../../components/Header";
import Layout from "../../containers/Layout";

function Home() {
  return (
    <>
      <Header title="everywhere" />
      <div className="flex h-full">
        <div className="flex flex-1 items-center justify-center">
          <p>everywhere map view</p>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Home;

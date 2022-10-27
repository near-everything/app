import React from "react";
import Header from "../components/Header";
import Layout from "../containers/Layout";

function Home() {
  return (
    <>
      <Header title="everything" />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Home;

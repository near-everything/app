import React from "react";
import Header from "../components/Header";
import InfinitePosts from "../components/Organize/InfinitePosts";
import Layout from "../containers/Layout";

function Home() {
  return (
    <>
      <Header title="everything" />
      <div className="flex h-full">
        <div className="flex flex-1" id="container">
          <InfinitePosts />
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Home;

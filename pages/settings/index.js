import React from "react";
import Layout from "../../containers/Layout";

function Settings() {
  return (
    <>
      <div className="flex flex-1 flex-col"></div>
    </>
  );
}

Settings.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Settings;

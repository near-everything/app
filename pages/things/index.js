import React from "react";
import Layout from "../../containers/Layout";

function Things() {
  return <></>;
}

Things.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Things;

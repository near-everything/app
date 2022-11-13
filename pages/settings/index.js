import Link from "next/link";
import React from "react";
import Layout from "../../containers/Layout";

function Settings() {
  return (
    <>
      <div className="flex flex-1 flex-col justify-center items-center">
        <p>this page is currently empty, <span className="text-blue-600 hover:text-blue-800 cursor-pointer"><Link href="/">go back</Link></span>.</p>
      </div>
    </>
  );
}

Settings.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Settings;

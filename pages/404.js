import { useRouter } from "next/router";
import React from "react";
import Layout from "../containers/Layout";

import ForbiddenIcon from "../icons/forbidden";

function Page404() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <ForbiddenIcon
        className="w-12 h-12 mt-8 text-green-200"
        aria-hidden="true"
      />
      <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">
        404
      </h1>
      <p className="text-gray-700 dark:text-gray-300">
        Page not found. Check the address or{" "}
        <button
          className="text-green-600 hover:underline dark:text-green-300"
          onClick={() => router.back()}
        >
          go back
        </button>
        .
      </p>
    </div>
  );
}

export default Page404;

Page404.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

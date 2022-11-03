/* eslint-disable @next/next/no-html-link-for-pages */
import { useUser } from "@auth0/nextjs-auth0";
import React from "react";
import Header from "../components/Header";
import Layout from "../containers/Layout";

function Home() {
  const { user, isLoading } = useUser();
  return (
    <>
      <Header title="everything" />
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
          <br />
          <br />
          <div className="flex justify-center">
            {isLoading ? null : (
              <>
                {user ? (
                  <a href="/api/auth/logout">
                    <button className="btn normal-case">logout</button>
                  </a>
                ) : (
                  <a href="/api/auth/login">
                    <button className="btn normal-case">login</button>
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Home;

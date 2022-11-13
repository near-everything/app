/* eslint-disable @next/next/no-html-link-for-pages */
import { useUser } from "@auth0/nextjs-auth0";
import {
  faDiscord,
  faGithub,
  faReddit,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            className="text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            send us a message
          </a>
          <p>or reach us on social media</p>
          <div className="flex justify-center">
            <a
              href="https://twitter.com/evrythingprject"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="mx-1 transition ease-in-out duration-500 hover:text-blue-400 cursor-pointer"
                size="lg"
                icon={faTwitter}
              />
            </a>
            <a
              href="https://discord.gg/pEGGmMGDfy"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="mx-1 transition ease-in-out duration-500 hover:text-indigo-700 cursor-pointer"
                size="lg"
                icon={faDiscord}
              />
            </a>
            <a
              href="https://old.reddit.com/r/everythingproject/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="mx-1 transition ease-in-out duration-500 hover:text-orange-600"
                size="lg"
                icon={faReddit}
              />
            </a>
            <a
              href="https://github.com/near-everything"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="mx-1 transition ease-in-out duration-500 hover:text-violet-600 cursor-pointer"
                size="lg"
                icon={faGithub}
              />
            </a>
          </div>
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

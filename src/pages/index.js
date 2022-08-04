import {
  faDiscord,
  faGithub,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { parseCookies } from "nookies";
import React from "react";
import getFirebaseAdmin from "../app/firebaseAdmin";
import Concern from "../components/Feedback/Concern";
import Help from "../components/Feedback/Help";
import Idea from "../components/Feedback/Idea";
import Question from "../components/Feedback/Question";
import Layout from "../containers/Layout";

export const getServerSideProps = async (ctx) => {
  try {
    const admin = getFirebaseAdmin();
    const cookies = parseCookies(ctx);
    await admin.auth().verifyIdToken(cookies.__session);

    return {
      props: {},
    };
  } catch (err) {
    // either the `__session` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
};

function Home() {
  return (
    <>
      <div className="flex flex-col h-full px-6 py-6">
        <div className="flex flex-row w-full justify-between">
          <p className={"font-bold text-6xl mb-8 py-6"}>everything</p>
          <div className="flex gap-2">
            <Link href="/profile">
              <FontAwesomeIcon
                className="transition ease-in-out duration-500 hover:text-gray-400 cursor-pointer"
                size="xl"
                icon={faUser}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <Question />
          <br />
          <Concern />
          <br />
          <Idea />
          <br />
          <Help />
          <br />
        </div>
        <footer className="flex flex-col p-8">
          <p>Like the project? Get involved.</p>
          <div className="flex flex-row">
            <a
              href="https://twitter.com/collctevrything"
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
        </footer>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Home;

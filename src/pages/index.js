import {
  faDiscord,
  faGithub,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import React from "react";
import getFirebaseAdmin from "../app/firebaseAdmin";
import Button from "../components/Button";
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
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col h-full px-6 py-6">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col">
            <p className={"font-bold text-6xl pt-6"}>everything</p>
            <p className={"font-bold text-xl mb-8 pb-6"}>the new economy</p>
          </div>
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
        <button
          onClick={() => router.push("/marketplace")}
          className={"btn btn-primary w-1/2"}
        >
          Marketplace
        </button>
        <br />
        <footer className="flex flex-col flex-1 justify-end mb-24">
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

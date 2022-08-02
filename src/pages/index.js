import {
  faDiscord,
  faGithub, faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import Button from "../components/Button";
import Concern from "../components/Feedback/Concern";
import Help from "../components/Feedback/Help";
import Idea from "../components/Feedback/Idea";
import Question from "../components/Feedback/Question";
import Layout from "../containers/Layout";
import ModuleContainer from "../containers/ModuleContainer";

function Home() {
  return (
    <>
      <div className="flex flex-1 flex-col">
        <Link href="/profile">
          <Button className="w-full h-16 mb-2">Profile</Button>
        </Link>
        <Link href="/settings">
          <Button className="w-full h-16 mb-2">Settings</Button>
        </Link>
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
              className="mx-1 transition ease-in-out duration-500 hover:text-blue-400"
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
              className="mx-1 transition ease-in-out duration-500 hover:text-indigo-700"
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
              className="mx-1 transition ease-in-out duration-500 hover:text-violet-600"
              size="lg"
              icon={faGithub}
            />
          </a>
        </div>
      </footer>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ModuleContainer moduleName={"everything"} moduleColor={"black"}>
        {page}
      </ModuleContainer>
    </Layout>
  );
};
export default Home;

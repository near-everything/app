import { parseCookies } from "nookies";
import React, { useState } from "react";
import getFirebaseAdmin from "../../app/firebaseAdmin";
import Button from "../../components/Button";
import InfiniteRequests from "../../components/Organize/InfiniteRequests";
import InfiniteThings from "../../components/Organize/InfiniteThings";
import Layout from "../../containers/Layout";

export async function getServerSideProps(ctx) {
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
}

function Organize() {
  const [list, setList] = useState("things");
  return (
    <>
      <div className="flex flex-col h-full px-6 py-6">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col w-full">
            <div className="flex w-full justify-between">
              <p className={"font-bold text-6xl pt-6 text-yellow-600"}>
                organize
              </p>
              <div class="tooltip tooltip-left" data-tip="A tool for organizing things and requests in the inventory of everything.">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p
              className={`font-bold text-xl mb-8 text-${
                list === "things" ? "green" : "red"
              }-600`}
            >
              {list === "things" ? "things" : "requests"}
            </p>
          </div>
        </div>
        <div>
          <Button
            className={"w-full h-8 mb-8"}
            onClick={() => {
              list === "things" ? setList("requests") : setList("things");
            }}
          >
            Toggle
          </Button>
          <div id="list-container">
            {list === "things" ? <InfiniteThings /> : <InfiniteRequests />}
          </div>
        </div>
      </div>
    </>
  );
}

Organize.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Organize;

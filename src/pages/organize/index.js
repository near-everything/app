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
          <div className="flex flex-col">
            <p className={"font-bold text-6xl pt-6 text-yellow-600"}>
              organize
            </p>
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

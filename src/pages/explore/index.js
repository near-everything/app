import { parseCookies } from "nookies";
import React from "react";
import getFirebaseAdmin from "../../app/firebaseAdmin";
import Header from "../../components/Header";
import Layout from "../../containers/Layout";

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
      <Header title="everywhere" />
      <div className="flex h-full">
        <div className="flex flex-1 items-center justify-center">
          <p>everywhere map view</p>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Home;

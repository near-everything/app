import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";
import Button from "../../components/Button";
import Layout from "../../containers/Layout";
import ModuleContainer from "../../containers/ModuleContainer";
import { useAuth } from "../../context/AuthContext";

function Profile() {
  const { user } = useAuth();
  const auth = getAuth();
  const router = useRouter();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("successfully signed out");
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <span>{user?.phoneNumber}</span>
      <br />
      <Button onClick={handleSignOut} className="w-full h-16 mb-2">
        Log out
      </Button>
    </>
  );
}

Profile.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ModuleContainer moduleName={"profile"} moduleColor={"black"}>
        {page}
      </ModuleContainer>
    </Layout>
  );
};
export default Profile;

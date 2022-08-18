import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { PulseLoader } from "react-spinners";
import Button from "../../components/Button";
import Layout from "../../containers/Layout";
import { useAuth } from "../../context/AuthContext";
import { useGetUser } from "../../features/auth/authApi";

function Profile() {
  const { user } = useAuth();
  const auth = getAuth();
  const { data, isLoading, isError } = useGetUser(user && user.uid, {
    enabled: !!user,
  });
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
      <div className="flex flex-col h-full px-6 py-6">
        <div className="flex flex-row w-full justify-between">
          <p className={"font-bold text-6xl mb-8 py-6"}>profile</p>
          <div className="flex gap-2">
            <Link href="/settings">
              <FontAwesomeIcon
                className="transition ease-in-out duration-500 hover:text-gray-400 cursor-pointer"
                size="xl"
                icon={faGear}
              />
            </Link>
          </div>
        </div>
        <br />
        {isLoading || isError ? (
          <div className="flex justify-center items-center h-full">
            <PulseLoader
              size={10}
              color={"#e5e7eb"}
              loading={isLoading}
              speedMultiplier={1.5}
            />
          </div>
        ) : (
          <>
            <div>
              <span>Wallet: {data && data.wallet}</span>
            </div>
          </>
        )}
        <br />
        <Button
          onClick={() => router.push("/profile/things")}
          className={"w-full h-16"}
        >
          My Everything
        </Button>
        <br />
        <Button
          onClick={() => router.push("/feedback")}
          className={"w-full h-16"}
        >
          Provide feedback
        </Button>
        <br />
        {user ? (
          <Button onClick={handleSignOut} className="w-full h-16 mb-2">
            Log out
          </Button>
        ) : (
          <Button
            onClick={() => router.push("/login")}
            className="w-full h-16 mb-2"
          >
            Log in
          </Button>
        )}
      </div>
    </>
  );
}

Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Profile;

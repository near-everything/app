import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import React, { useState } from "react";
import { RgbaStringColorPicker } from "react-colorful";
import Avatar from "../../components/Avatar";
import EditProfile from "../../components/EditProfile";
import ProfileMenu from "../../components/ProfileMenu";
import ThingList from "../../components/ThingList";
import Layout from "../../containers/Layout";

function Profile() {
  const { user } = useUser();
  const [color, setColor] = useState("#ffffff");

  return (
    <>
      <div className="navbar">
        <div className="flex-1"></div>
        <div className="flex-none">
          <label
            htmlFor="profile-menu"
            className="btn btn-circle btn-ghost modal-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex ml-2">
          <div className="flex flex-col">
            <div className="dropdown dropdown-right">
              <label tabIndex="0">
                <Avatar color={color} size="36" />
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content p-2 shadow bg-base-100 rounded-box w-52"
              >
                <RgbaStringColorPicker color={color} onChange={setColor} />
              </ul>
            </div>
            <div>
              <div className="mt-2 mb-4 text-4xl">
                <p>{user?.nickname}</p>
              </div>
            </div>
            {/* <label htmlFor="edit-profile" className="btn modal-button w-48">
            edit profile
          </label> */}
          </div>
        </div>
        <EditProfile />
        <div className="divider" />
        <ThingList ownerId={user?.sub}/>
      </div>
      <ProfileMenu />
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();

Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Profile;

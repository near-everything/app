import React from "react";
import ProfileData from "../../components/Profile/ProfileData";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ThingList from "../../components/ThingList";
import Layout from "../../containers/Layout";

function Profile() {
  return (
    <>
      <ProfileHeader />
      <div className="flex flex-1 flex-col">
        <ProfileData />
        <div className="divider" />
        <ThingList />
        {/* <ProfileMedia /> */}
      </div>
    </>
  );
}

Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Profile;

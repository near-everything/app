import React from "react";
import ProfileData from "../../components/Profile/ProfileData";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileMedia from "../../components/Profile/ProfileMedia";
import Layout from "../../containers/Layout";
import PageContentContainer from "../../containers/PageContentContainer";

function Profile() {
  return (
    <>
      <ProfileHeader username="efizzysnaps" />
      <PageContentContainer>
        <ProfileData />
        <div className="divider" />
        {/* <ProfileMedia /> */}
      </PageContentContainer>
    </>
  );
}

Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Profile;

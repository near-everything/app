import Avatar from "../Avatar";
import EditProfile from "./EditProfile";

function ProfileData() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <Avatar color={"#ffffff"} />
          <div className="mt-2 mb-4">
            <p>Elliot Braem</p>
          </div>
          <label htmlFor="edit-profile" className="btn modal-button">
            edit profile
          </label>
        </div>
      </div>
      <EditProfile />
    </>
  );
}

export default ProfileData;

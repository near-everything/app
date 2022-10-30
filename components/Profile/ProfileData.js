import Avatar from "../Avatar";
import EditProfile from "./EditProfile";

function ProfileData() {
  return (
    <>
      <div className="flex ml-2">
        <div className="flex flex-col">
          <Avatar color={"#ffffff"} size="36" />
          <div>
            <div className="mt-2 mb-4 text-4xl">
              <p>elliot braem</p>
            </div>
          </div>
          <label htmlFor="edit-profile" className="btn modal-button w-48">
            edit profile
          </label>
        </div>
      </div>
      <EditProfile />
    </>
  );
}

export default ProfileData;

import { useUser } from "@auth0/nextjs-auth0";
import Avatar from "../Avatar";
import EditProfile from "./EditProfile";

function ProfileData() {
  const { user } = useUser();
  
  return (
    <>
      <div className="flex ml-2">
        <div className="flex flex-col">
          <Avatar color={"#ffffff"} size="36" />
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
    </>
  );
}

export default ProfileData;

import ProfileMenu from "./ProfileMenu";

function ProfileHeader({ username }) {
  return (
    <>
      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-4xl">{username}</a>
        </div>
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
      <ProfileMenu />
    </>
  );
}

export default ProfileHeader;

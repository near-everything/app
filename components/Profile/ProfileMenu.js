import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProfileMenu() {
  return (
    <>
      <input type="checkbox" id="profile-menu" className="modal-toggle" />
      <label
        htmlFor="profile-menu"
        className="modal modal-bottom sm:modal-middle cursor-pointer"
      >
        <label className="modal-box relative" htmlFor="">
          <ul className="menu bg-base-100">
            <li>
              {/* <Link href="/settings"> */}
              <span>
                <FontAwesomeIcon
                  className="transition ease-in-out duration-500 hover:text-gray-400 cursor-pointer"
                  size="xl"
                  icon={faGear}
                />
                Settings
              </span>
              {/* </Link> */}
            </li>
          </ul>
        </label>
      </label>
    </>
  );
}

export default ProfileMenu;

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Profile() {
  return (
    <>
      <Link href="/profile">
        <div className="flex justify-center items-center">
          <button className="btn btn-ghost hover:text-primary">
            <FontAwesomeIcon size="xl" icon={faUser} />
          </button>
        </div>
      </Link>
    </>
  );
}

export default Profile;

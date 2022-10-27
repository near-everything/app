import {
  faCube,
  faSquare,
  faSquarePlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Create() {
  return (
    <Link href="/create/thing">
      <div className="dropdown dropdown-top dropdown-hover flex justify-center items-center">
        <label tabIndex="0" className="btn btn-ghost hover:text-primary">
          <FontAwesomeIcon size="xl" icon={faSquarePlus} />
        </label>
        <ul
          tabIndex="0"
          className="dropdown-content menu menu-horizontal p-2 shadow bg-neutral rounded-box w-auto items-center"
        >
          <li>
            <Link href="/create/post">
              <div className="flex flex-col align-middle hover:text-primary">
                <FontAwesomeIcon size="xl" icon={faSquare} />
                <p>POST</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/create/thing">
              <div className="flex flex-col align-middle hover:text-primary">
                <FontAwesomeIcon size="xl" icon={faCube} />
                <p>THING</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/create/request">
              <div className="flex flex-col align-middle hover:text-primary">
                <FontAwesomeIcon size="xl" icon={faStar} />
                <p>REQUEST</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </Link>
  );
}

export default Create;

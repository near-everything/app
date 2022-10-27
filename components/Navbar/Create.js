import {
  faSquarePlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Create() {
  return (
    <Link href="/create/thing">
      <div className="flex justify-center items-center">
        <button className="btn btn-ghost hover:text-primary">
          <FontAwesomeIcon size="xl" icon={faSquarePlus} />
        </button>
      </div>
    </Link>
  );
}

export default Create;

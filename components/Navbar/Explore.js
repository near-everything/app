import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Explore() {
  return (
    <>
      <Link href="/explore">
        <div className="flex justify-center items-center">
          <button className="btn btn-ghost hover:text-primary">
            <FontAwesomeIcon size="xl" icon={faMagnifyingGlass} />
          </button>
        </div>
      </Link>
    </>
  );
}

export default Explore;

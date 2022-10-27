import {
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <>
      <Link href="/">
        <div className="flex justify-center items-center">
          <button className="btn btn-ghost hover:text-primary">
            <FontAwesomeIcon size="xl" icon={faGlobe} />
          </button>
        </div>
      </Link>
    </>
  );
}

export default Home;

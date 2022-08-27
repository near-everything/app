import { faShop } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Marketplace() {
  return (
    <>
      <Link href="/marketplace">
        <div className="flex justify-center items-center">
          <button className="btn btn-ghost hover:text-primary">
            <FontAwesomeIcon size="xl" icon={faShop} />
          </button>
        </div>
      </Link>
    </>
  );
}

export default Marketplace;

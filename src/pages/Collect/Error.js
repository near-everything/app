import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Link to="/">
      <div className="flex justify-center items-center h-full text-center ">
        an error occurred
        <br />
        (click anywhere to continue)
      </div>
    </Link>
  );
}

export default Error;

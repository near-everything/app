import React from "react";
import { Link } from "react-router-dom";

function Complete() {
  return (
    <Link to="/">
      <div className="flex justify-center items-center h-full text-center ">
        successfully uploaded
        <br />
        (click anywhere to continue)
      </div>
    </Link>
  );
}

export default Complete;

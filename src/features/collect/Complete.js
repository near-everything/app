import React from "react";
import { Link, useLocation } from "react-router-dom";

function Complete() {
  const { state } = useLocation();
  const { itemId } = state;

  return (
    <Link to="/">
      <div className="flex justify-center items-center h-full text-center ">
        successfully uploaded
        <br />
        item id: {itemId}
        <br />
        (click anywhere to continue)
      </div>
    </Link>
  );
}

export default Complete;

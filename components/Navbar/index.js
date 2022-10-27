import React from "react";
import Create from "./Create";
import Home from "./Home";
import Profile from "./Profile";

function Navbar() {
  return (
    <div className="btm-nav">
      <Home />
      <Create />
      <Profile />
    </div>
  );
}

export default Navbar;

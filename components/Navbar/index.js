import React from "react";
import Create from "./Create";
import Explore from "./Explore";
import Home from "./Home";
import Marketplace from "./Marketplace";
import Profile from "./Profile";

function Navbar() {
  return (
    <div className="btm-nav">
      <Home />
      <Explore />
      <Create />
      <Marketplace />
      <Profile />
    </div>
  );
}

export default Navbar;

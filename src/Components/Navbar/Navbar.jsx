import navImg from "../../assets/Images/logo.png";
import coinImg from "../../assets/Images/pngegg.png";

import React from "react";

const Navbar = () => {
  return (
    <div className="navbar w-11/12 m-w-[1200px] mx-auto">
      <div className="flex-1">
        <a className="text-xl">
          <img className="w-[60px] h-[60px]" src={navImg} alt="" />
        </a>
      </div>
      <div className="flex items-center">
        <span className="mr-1">6000000</span>
        <span className="mr-1">coin</span>
        <span>
          <img className="mr-1 w-[30px] h-[30px]" src={coinImg} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;

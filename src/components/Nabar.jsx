import React from "react";
import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navlink } from "../constants";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden">
        
      </ul>
    </nav>
  );
};

export default Navbar;

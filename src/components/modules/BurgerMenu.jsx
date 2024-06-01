"use client";

import { slide as Menu } from "react-burger-menu";

const BurgerMenu = () => {
  return (
    <Menu right>
      <a href="#" className="text-xl py-4">Home</a>
      <a href="#" className="text-xl py-4">Products</a>
      <a href="#" className="text-xl py-4">About Us</a>
      <a href="#" className="text-xl py-4">Contact Us</a>
    </Menu>
  );
};

export default BurgerMenu;

import React, { useState } from "react";
import { BiMenu, BiSearch, BiX } from "react-icons/bi";

const NavItems = [
  { label: "Home" },
  { label: "Products" },
  { label: "Our Services" },
  { label: "Accessories" },
  { label: "Contact Us" },
];
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [searchOpen,setSearchOpen] = useState(false);
  const handleSearch = () => {
    setSearchOpen(!searchOpen);
  }

  return (
    <div className="border-b h-16 w-screen flex items-center  justify-between  border-black">
      <div className="">
        <div
          className={`text-2xl z-10 font-semibold ml-1 ${
            menuOpen ? "text-white" : "text-blue-400"
          }`}
        >
          ShopTV
        </div>
      </div>
      <div className="md:flex gap-2 items-center  justify-center hidden ">
        <ul className="flex gap-2">
          {NavItems.map((items) => (
            <li
              className="bg-amber-400  hover:bg-yellow-400 p-1 rounded-md text-white cursor-pointer"
              key={items.id}
            >
              {items.label}
            </li>
          ))}
        </ul>
      </div>

      <div className=" text-black flex items-center justify-end">
        <div className={`flex items-center bg-transparent p-1 mr-1 border rounded-full ${searchOpen ? "animate-scroll gap-1 ":"animate-scroll-close"} `}>
          <a href="#input">
            <BiSearch onClick={handleSearch} className="text-lg  " type="button" />
          </a>
          <input
            className={`border-none outline-none  ${searchOpen ? "flex animate-scroll" : "animate-scroll-close w-0 h-0"} `}
            type="search"
            id="input"
            placeholder="Search"
          />
        </div>
        {menuOpen ? (
          <BiX
            className="text-2xl  hover:text-blue-400 "
            onClick={handleMenu}
          />
        ) : (
          <BiMenu
            className="text-2xl  hover:text-blue-400"
            onClick={handleMenu}
          />
        )}
        {menuOpen && (
          <div className="w-70 flex border-r -z-10 bg-blue-400 h-full top-0 absolute left-0 ">
            <ul className="absolute w-full items-center text-lg font-semibold  top-[8.5%] ">
              {NavItems.map((items) => (
                <li
                  className=" p-2 hover:bg-yellow-400 rounded-full hover:text-white cursor-pointer w-full justify-center flex "
                  key={items.id}
                >
                  {items.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

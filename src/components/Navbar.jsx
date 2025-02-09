import React, { useState } from "react";
import Cart from "./Cart";
import { useCartStore } from "../store/CartStore";
import { BiCart, BiMenu, BiSearch, BiX } from "react-icons/bi";

const NavItems = [
  { label: "Home", ref:"#home"  },
  { label: "Products", ref:"#products" },
  { label: "Our Services", ref:"#services" },
  { label: "Accessories",ref:"#accessories" },
  { label: "Contact Us", ref:"#contact" },
];
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);

  const [searchOpen, setSearchOpen] = useState(false);
  const handleSearch = () => {
    setSearchOpen(!searchOpen);
  };
  const handleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className="border-b h-16 w-screen flex items-center  justify-between  border-black">
      <div className="z-10">
        <div
          className={`text-2xl font-semibold ml-1 ${
            menuOpen ? "text-white" : "text-blue-400"
          }`}
        >
          ShopTV
        </div>
      </div>
      <div className="md:min-md:flex gap-2 items-center  justify-center hidden ">
        <ul className="flex gap-2">
          {NavItems.map((items) => (
            <a href={items.ref}
              className="bg-amber-400  hover:bg-yellow-400 p-1 rounded-md text-white cursor-pointer"
              key={items.id}
            >
              {items.label}
            </a>
          ))}
        </ul>
      </div>

      <div className=" text-black flex items-center justify-end">
        <div
          className={`flex items-center bg-transparent p-1 mr-1 border rounded-full ${
            searchOpen ? "animate-scroll gap-1 " : "animate-scroll-close"
          } `}
        >
          <a href="#input">
            <BiSearch
              onClick={handleSearch}
              className="text-lg  "
              type="button"
            />
          </a>
          <input
            className={`border-none outline-none   ${
              searchOpen
                ? "flex animate-scroll"
                : "animate-scroll-close w-0 h-0"
            } `}
            type="search"
            id="input"
            placeholder="Search"
          />
        </div>
        <div onClick={handleCart} className="text-3xl  cursor-pointer ">
          <span className="bg-orange-600 flex justify-center items-center text-[8px] rounded-full absolute right-[14px] top-[10px] text-sm text-white w-[12px] h-[12px]">
            {totalItems}
          </span>
          <BiCart />
        </div>
        {cartOpen && <Cart cart={cart} />}
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
          <div className="w-70 flex border-r z-0 bg-blue-400 h-full top-0 absolute left-0 ">
            <ul className="absolute w-full items-center text-lg font-semibold  top-[8.5%] ">
              {NavItems.map((items) => (
                <a href={items.ref}
                  className=" p-2 hover:bg-yellow-400 rounded-full hover:text-white cursor-pointer w-full justify-center flex "
                  key={items.id}
                >
                  {items.label}
                </a>
              ))}
            </ul>
          </div>
        )}
      </div>
      {cartOpen ? <div className="z-50 absolute right-2 top-2 text-2xl hover:text-blue-400 cursor-pointer" onClick={handleCart}>
        <BiX />
      </div> : ""}
    </div>
  );
};

export default Navbar;

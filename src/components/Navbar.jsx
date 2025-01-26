import React from "react";

const NavItems = [
  { label: "Home" },
  { label: "Products" },
  { label: "Our Services" },
  { label: "Accessories" },
  { label: "Contact Us" },
];
const Navbar = () => {
  return (
    <div className="border h-16 w-screen flex items-center  justify-between text-blue-400 border-black  ">
      <div className="">
        <div className="text-xl font-semibold ml-1">ShopTV</div>
      </div>
      <div >
        <ul className="flex gap-2">
          {NavItems.map((items) => (
            <li key={items.id}>{items.label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

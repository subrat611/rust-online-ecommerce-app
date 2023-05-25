import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import {
  FaChevronDown,
  FaChevronLeft,
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
} from "react-icons/fa";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineShop,
} from "react-icons/ai";

import { navAccountDropMenuItems } from "../constants";

export default function Navbar() {
  const [dropArrow, setdropArrow] = useState(false);
  const showDropMenu = () => setdropArrow((prev) => !prev);
  return (
    <>
      <div className="shadow">
        <div className="w-full lg:w-[75%] lg:mx-auto">
          <div className="text-black p-2 flex items-center justify-between relative">
            <div className="flex items-center">
              <div>
                <p className="text-base font-medium flex font-mono">
                  Rust <AiOutlineShop className="text-2xl mx-2" />
                </p>
                <p className="text-base">Online Store</p>
              </div>
            </div>
            {/* search bar */}
            <div className="hidden gap-x-5 md:flex items-center font-sans">
              <div className="group relative cursor-pointer">
                <div className="flex items-center cursor-pointer">
                  <AiOutlineUser className="text-2xl mx-1" />
                  <p>Account</p>
                </div>
                <div className="absolute z-50 hidden group-hover:flex group-hover:items-start group-hover:flex-col">
                  <div className="mt-3">
                    <div className="shadow bg-white w-max rounded">
                      {navAccountDropMenuItems.map(({ name, icon }, i) => (
                        <Link
                          key={i}
                          to="/create-product"
                          className="flex items-center my-2 py-2 px-4 hover:bg-slate-50"
                        >
                          {icon}
                          <span className="mx-2">{name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center cursor-pointer">
                <AiOutlineShoppingCart className="text-2xl mx-1" />
                <p>Cart</p>
              </div>
            </div>
            {dropArrow ? (
              <FaChevronDown
                className="text-xl mr-1 md:hidden"
                onClick={showDropMenu}
              />
            ) : (
              <FaChevronLeft
                className="text-xl mr-1 md:hidden"
                onClick={showDropMenu}
              />
            )}
            {dropArrow && (
              <div className="absolute top-0 right-0 bg-black h-screen w-full shadow md:hidden">
                <div className="flex items-center mx-3 mt-4 mb-4">
                  <FaChevronDown
                    className="text-xl mr-1 md:hidden"
                    onClick={showDropMenu}
                  />
                  <span>Close</span>
                </div>
                <div className="flex items-center gap-x-2 border-b py-4">
                  <FaUserCircle className="text-xl ms-3" />
                  <span>Profile</span>
                </div>
                <div className="flex items-center gap-x-2 border-b py-4">
                  <FaShoppingCart className="text-xl ms-3" />
                  <span>Cart</span>
                </div>
                <div className="flex items-center gap-x-2 py-4">
                  <FaHeart className="text-xl ms-3" />
                  <span>Wishlist</span>
                </div>
                <button className="bg-blue-500 py-2 px-3 rounded-md ms-3 mt-2">
                  Sign in
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[75%] lg:mx-auto">
        <Outlet />
      </div>
    </>
  );
}

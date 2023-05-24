import { useState } from "react";
import {
  FaChevronDown,
  FaChevronLeft,
  FaHeart,
  FaShoppingCart,
  FaTruck,
  FaUserCircle,
} from "react-icons/fa";

export default function Navbar() {
  const [dropArrow, setdropArrow] = useState(false);
  const showDropMenu = () => setdropArrow((prev) => !prev);
  return (
    <div className="text-white p-2 flex items-center justify-between relative">
      <div className="flex items-center">
        <div>
          <p className="text-base font-medium flex">
            Rust <FaTruck className="text-2xl mx-2" />
          </p>
          <p className="text-base">Online Store</p>
        </div>
      </div>
      {/* search bar */}
      <div className="hidden gap-x-5 md:flex items-center">
        {false ? (
          <FaUserCircle className="text-2xl" />
        ) : (
          <button className="bg-blue-500 py-2 px-3 rounded-md ms-3 mt-2">
            Sign in
          </button>
        )}
        {/* logout */}
        {/* orders */}
        <FaShoppingCart className="text-2xl cursor-pointer" />
        <FaHeart className="text-2xl" />
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
  );
}

import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { useCart } from "../../context/CartContext"; // Adjust the path

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#services" },
  { id: 3, name: "Kids Wear", link: "/#" },
  { id: 4, name: "Mens Wear", link: "/#" },
  { id: 5, name: "Electronics", link: "/#" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  const { cartCount } = useCart(); 

  return (
    <div>
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-2xl sm:text-3xl font-bold">
            <img src={Logo} alt="Logo" className="w-10" />
            <span>ShopLoom</span>
          </a>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative group  sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[280px] transition-all duration-300 rounded-full border border-gray-300 px-3 py-1 focus:outline-none focus:border-primary "
              />
              <IoMdSearch className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 group-hover:text-primary" />
            </div>

            {/* Order Button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-2 hover:scale-105 transition-all relative"
            >
              <span className="hidden sm:inline-block">Order</span>
              <div className="relative">
                <FaCartShopping className="text-xl" />
                
                {/* Cart count badge */}
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div data-aos="zoom-in" className="bg-white ">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center sm:justify-start items-center gap-4 py-3">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="px-3 py-1 hover:text-primary transition-colors"
                >
                  {data.name}
                </a>
              </li>
            ))}

            {/* Dropdown */}
            <li className="relative group cursor-pointer">
              <a className="flex items-center gap-1 px-3 py-1">
                Trending Products
                <FaCaretDown className="transition-transform group-hover:rotate-180" />
              </a>
              <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white rounded-md shadow-lg w-48 z-50">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="block px-4 py-2 hover:bg-primary/10 transition-colors"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import { useCart } from "../context/Cartcontext";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const { searchTerm, setSearchTerm } = useSearch();
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/menu", label: "Menu" },
    { path: "/review", label: "Review" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
    { path: "/adminpage", label: "AdminPage" },
    { path: "/adminlogin", label: "Admin Login" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50">
      <nav className="flex justify-between items-center px-6 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.pinimg.com/736x/df/83/f5/df83f585029b7996c15640a3396ef122.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-green-500 text-2xl font-extrabold"><span className="text-white">Kc</span> Restaurant</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`font-bold ${
                  location.pathname === link.path
                    ? "text-green-500"
                    : "text-white hover:text-green-400"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Search + Cart */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center bg-gray-800 rounded-md px-2 py-1">
            <CiSearch className="w-5 h-5 text-white mr-2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="bg-gray-800 text-white outline-none px-2 w-48"
            />
          </div>

          <Link to="/cartpage" className="relative">
            <FaShoppingCart className="w-6 h-6 text-white cursor-pointer" />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>

    

          {/* Mobile Search Toggle */}
          <button onClick={() => setMobileSearchOpen(!mobileSearchOpen)}>
            <CiSearch className="w-6 h-6 text-white cursor-pointer" />
          </button>
              {/* Mobile Controls: Cart + Search + Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          {/* Cart Icon */}
          <Link to="/cartpage" className="relative">
            <FaShoppingCart className="w-6 h-6 text-white cursor-pointer" />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalQuantity}
              </span>
            )}
          </Link>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="w-6 h-6 text-white" />
            ) : (
              <FaBars className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Search Input */}
      {mobileSearchOpen && (
        <div className="md:hidden bg-gray-700 p-3 flex justify-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="bg-gray-600 text-white outline-none px-3 py-1 w-11/12 rounded"
          />
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white flex flex-col items-center py-4 space-y-3 animate-slideDown">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`font-semibold ${
                location.pathname === link.path
                  ? "text-green-500"
                  : "text-white hover:text-green-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* SlideDown Animation */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-in-out;
        }
      `}</style>
    </header>
  );
}

export default Header;

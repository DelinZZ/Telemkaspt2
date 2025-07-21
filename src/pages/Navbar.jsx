// src/pages/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-green-700">
          EkoSharr
        </Link>

        {/* Mobile toggle */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </div>

        {/* Links */}
        <ul
          className={`md:flex md:space-x-6 md:items-center absolute md:static bg-white left-0 w-full md:w-auto transition-all duration-300 ease-in-out ${
            open ? "top-[48px] opacity-100" : "top-[-300px] opacity-0"
          } md:opacity-100`}
        >
          <li>
            <Link
              to="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:text-green-700"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block px-4 py-2 text-sm text-gray-700 hover:text-green-700"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className="block px-4 py-2 text-sm text-gray-700 hover:text-green-700"
              onClick={() => setOpen(false)}
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block px-4 py-2 text-sm text-gray-700 hover:text-green-700"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

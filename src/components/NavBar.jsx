import { Link, NavLink } from "react-router-dom";
import { FaMoneyBillWave } from "react-icons/fa";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="bg-blue-700 text-white shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <FaMoneyBillWave /> Expense Tracker
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {/* Navigation links container */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex md:justify-end md:space-x-4 bg-blue-700 md:bg-transparent absolute md:static w-full md:w-auto top-full left-0 z-10`}
      >
        <NavLink
          to="/"
          onClick={handleLinkClick} // Close menu on link click
          className={({ isActive }) =>
            isActive
              ? "sm:border-b-2 border-white font-bold block px-4 py-2 text-left"
              : "hover:text-blue-300 block px-4 py-2 text-left"
          }
        >
          <b>Home</b>
        </NavLink>
        <NavLink
          to="/about"
          onClick={handleLinkClick} // Close menu on link click
          className={({ isActive }) =>
            isActive
              ? "sm:border-b-2 border-white font-bold block px-4 py-2 text-left"
              : "hover:text-blue-300 block px-4 py-2 text-left"
          }
        >
          <b>About</b>
        </NavLink>
        <NavLink
          to="/create"
          onClick={handleLinkClick} // Close menu on link click
          className={({ isActive }) =>
            isActive
              ? "sm:border-b-2 border-white font-bold block px-4 py-2 text-left"
              : "hover:text-blue-300 block px-4 py-2 text-left"
          }
        >
          <b>Create</b>
        </NavLink>
        <NavLink
          to="/dashboard"
          onClick={handleLinkClick} // Close menu on link click
          className={({ isActive }) =>
            isActive
              ? "sm:border-b-2 border-white font-bold block px-4 py-2 text-left"
              : "hover:text-blue-300 block px-4 py-2 text-left"
          }
        >
          <b>Dashboard</b>
        </NavLink>
        <NavLink
          to="/help"
          onClick={handleLinkClick} // Close menu on link click
          className={({ isActive }) =>
            isActive
              ? "sm:border-b-2 border-white font-bold block px-4 py-2 text-left"
              : "hover:text-blue-300 block px-4 py-2 text-left"
          }
        >
          <b>Help</b>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

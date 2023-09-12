import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  faHouseChimney,
  faUser,
  faIdCard,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navbarMenu = [
    {
      link: "/",
      name: "Home",
      icon: faHouseChimney,
    },
    {
      link: "/about",
      name: "About",
      icon: faUser,
    },
    {
      link: "/patients",
      name: "Patient Details",
      icon: faIdCard,
    },
    {
      link: "/add-patients",
      name: "Add Patient",
      icon: faAddressCard,
    },
  ];

  const toggleMobileMenu = () => {
    if (window.innerWidth<768) {
      setMobileMenuOpen(!mobileMenuOpen);
    }
  };

  const navigate = useNavigate()

  return (
    <nav className="bg-white border drop-shadow-lg shadow px-4 py-2 flex justify-between items-center md:h-20 relative">
      {/* Logo */}
      <Link className="text-blue-500 text-2xl font-bold pl-5" to="/">
        Doctor's Clinic
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden ">
        <button
          className="text-blue-500 text-2xl p-2"
          onClick={toggleMobileMenu}
        >
          {!mobileMenuOpen ? "\u2630" : "\u2715"}
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          mobileMenuOpen ? "top-16" : "-top-80"
        } transition-all duration-700 ease-in md:flex gap-4 space-y-4 md:space-y-0 absolute md:static text-gray-950 text-lg md:text-base font-light md:font-normal justify-between bg-white w-full md:w-auto left-0 md:left-auto p-5 md:p-0 py-6 md:py-0 shadow-lg md:shadow-none rounded-lg md:rounded-none drop-shadow-lg md:drop-shadow-none mt-1 md:mt-0 z-10`}
        style={{ zIndex: 1000 }}
      >
        {navbarMenu.map((item, index) => (
          <li
            className="w-full md:w-auto flex items-start justify-between gap-2 md:hover:scale-105"
            key={index}
          >
            <NavLink
              to={item.link}
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                isActive
                  ? "bg-indigo-50 md:bg-white w-full md:w-auto px-2 md:px-0 py-1 md:py-0 rounded-lg "
                  : "hover:bg-gray-200 md:hover:bg-white transition duration-300  w-full md:w-auto md:px-0 md:py-0  px-2 py-1 rounded-lg"
              }
            >
              <FontAwesomeIcon
                icon={item.icon}
                style={{ color: "#7393B3" }}
                className="md:hidden pr-[6px]"
              />{" "}
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Sign Up and Sign In */}
      <div className="hidden md:flex space-x-4">
        {/* <button onClick={()=> navigate("/signup")} className="transition duration-300 bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg hover:scale-110">
          Sign Up
        </button> */}
        <button onClick={()=> navigate("/login")} className="transition duration-300 bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg hover:scale-110">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

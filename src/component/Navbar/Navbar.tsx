import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { navbarMenu } from "../Const/const";
import { useFirebaseAuth } from "../../firebase.auth";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const user:any = useFirebaseAuth()
  const userName = user?.displayName;

  const toggleMobileMenu = () => {
    if (window.innerWidth < 768) {
      setMobileMenuOpen(!mobileMenuOpen);
    }
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSignOut = (e: any) => {
    e.preventDefault();
    accountLogout();
    setDropdownOpen(false)
  };

  const accountLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/login"); // Sign-out successful.
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <nav className="bg-white border drop-shadow-lg shadow px-4 py-2 flex justify-between items-center md:h-20 relative z-50">
      {/* Logo */}
      <Link className="text-blue-500 text-2xl font-bold pl-5" to="/">
        Doctor's Clinic
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden relative z-1">
        <button
          className="text-blue-500 text-2xl p-2"
          onClick={toggleMobileMenu}
        >
          {!mobileMenuOpen ? "\u2630" : "\u2715"}
        </button>
      </div>

      {/* Mobile Menu */}
      {user && ( // Show mobile menu only if user is signed in
        <ul
          className={`${
            mobileMenuOpen ? "top-16" : "-top-80"
          } transition-all duration-700 ease-in md:flex gap-4 space-y-4 md:space-y-0 absolute md:static text-gray-950 text-lg md:text-base font-light md:font-normal justify-between bg-white w-full md:w-auto left-0 md:left-auto p-5 md:p-0 py-6 md:py-0 shadow-lg md:shadow-none rounded-lg md:rounded-none drop-shadow-lg md:drop-shadow-none mt-1 md:mt-0 z-10`}
          style={{ zIndex: 1 }}
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
      )}

      {/* Sign In/Sign Out */}
      <div className="hidden md:flex items-center space-x-4 z-50">
        {/* <div className="flex items-center"> */}
        {user ? (
          // User is signed in
          <div className="relative group md:z-50">
            <button
              onClick={toggleDropdown}
              className="group-hover:bg-gray-200 hover:bg-gray-200 p-2 rounded-lg focus:outline-none px-4 mx-4"
            >
             {userName}
            </button>
            {dropdownOpen && (
              <div className="z-50 absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <ul>
                  <li>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.293 3.293a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          // User is not signed in
          <button
          onClick={() => navigate("/login")}
          className="transition duration-300 bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg hover:scale-110"
        >
          Log In
        </button>

        )}
      </div>
    </nav>
  );
};

export default Navbar;

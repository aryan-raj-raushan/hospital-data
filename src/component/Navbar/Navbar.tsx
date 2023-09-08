import { Link } from "react-router-dom";

const navbarMenu = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/about",
    name: "About",
  },
  {
    link: "/patients",
    name: "Patient Details",
  },
  {
    link: "/add-patients",
    name: "Add Patient",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-white border drop-shadow-lg shadow px-4 py-2 flex justify-between items-center h-20">
      {/* Logo */}
      <Link className="text-blue-500 text-2xl font-bold pl-5" to="/">
        Doctor's Clinic
      </Link>

      {/* Navigation Links */}
      <ul className="md:flex gap-4 text-gray-950 text-lg items-center hidden">
        {navbarMenu.map((item: any, index: number) => {
          return (
            <li
              className="transition duration-300 hover:text-blue-300"
              key={index}
            >
              <Link to={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </ul>

      {/* Sign Up and Sign In */}
      <div className="flex space-x-4">
        <button className="transition duration-300 bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
          Sign Up
        </button>
        <button className="transition duration-300 bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

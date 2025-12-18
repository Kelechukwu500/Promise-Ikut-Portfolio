import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Fuse from "fuse.js";
import { FaHome } from "react-icons/fa";
import Logo from "../assets/Logo.jpg";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const searchItems = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Experience", url: "/experience" },
    { title: "Contact", url: "/contact" },
    { title: "Hire Me", url: "/hire-me" },
    { title: "Let's Connect", url: "/contact" },
    { title: "Latest Projects", url: "/latest-projects" },
  ];

  const fuse = new Fuse(searchItems, {
    keys: ["title"],
    threshold: 0.3,
  });

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim()) {
      const result = fuse.search(value).map((res) => res.item);
      setResults(result);
    } else {
      setResults([]);
    }
  };

  const handleSelect = (item) => {
    navigate(item.url);
    setQuery("");
    setResults([]);
  };


const links = [
  { title: "Home", url: "/", className: "text-blue-500 hover:text-yellow-500" },
  {
    title: "About",
    url: "/about",
    className: "text-gray-800 hover:text-yellow-500",
  },
  {
    title: "Experience",
    url: "/WorkExperience",
    className: "text-gray-800 hover:text-yellow-500",
  },
  {
    title: "Contact",
    url: "/Contact",
    className: "text-gray-800 hover:text-yellow-500",
  },
];


  return (
    <nav className="w-screen border-gray-200 bg-gray-200 z-50 fixed top-0 left-0">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto py-2 md:py-3"> 

        {/* Navbar Logo Section */}
        

        {/* Center Search Bar */}
        <a href="#" className="text-xl font-bold text-gray-700">
          <span className="px-1 bg-green-600 rounded-full animate-[ping_1.9s_linear_infinite]">
            P
          </span>
          <span className="px-1 bg-green-600 rounded-full animate-[ping_2s_linear_infinite]">
            R
          </span>
          <span className="px-1 bg-green-600 rounded-full animate-[ping_2.1s_linear_infinite]">
            O
          </span>
          <span className="px-1 bg-green-600 rounded-full animate-[ping_2.2s_linear_infinite]">
            M
          </span>
          <span className="px-1 bg-green-600 rounded-full animate-[ping_2.3s_linear_infinite]">
            I
          </span>
          <span className="px-1 bg-green-600 rounded-full animate-[ping_2.4s_linear_infinite]">
            S
          </span>
          <span className="px-1 bg-green-600 rounded-full animate-[ping_2.4s_linear_infinite]">
            E
          </span>
          <span className="px-1 bg-green-600 rounded-full animate-[ping_2.4s_linear_infinite]">
            I
          </span>
          <span className="px-1 bg-green-600 rounded-full animate-[ping_2.4s_linear_infinite]">
            K
          </span>
          <span className="px-1 bg-green-600 rounded-full animate-[ping_2.4s_linear_infinite]">
            U
          </span>
          <span className="px-1 bg-green-600 rounded-full animate-[ping_2.4s_linear_infinite]">
            T
          </span>
        </a>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center mt-4">
          <button className="text-white text-3xl">
            <FaBars />
          </button>
        </div>

        {/* Page Links */}
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row md:space-x-8 font-medium">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.url}
                  className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded md:bg-transparent md:text-purple-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

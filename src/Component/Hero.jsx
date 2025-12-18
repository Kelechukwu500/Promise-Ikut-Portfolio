import React, { useRef } from "react";
import image from "../assets/promise.jpg"; // Imported image
import { Link } from "react-router-dom";

const Hero = () => {
  const navRef = useRef(null);
  const openNavBtnRef = useRef(null);
  const closeNavBtnRef = useRef(null);

  const handleOpenNav = () => {
    if (navRef.current && openNavBtnRef.current && closeNavBtnRef.current) {
      navRef.current.classList.remove("hidden");
      openNavBtnRef.current.classList.add("hidden");
      closeNavBtnRef.current.classList.remove("hidden");
    }
  };

  const handleCloseNav = () => {
    if (navRef.current && openNavBtnRef.current && closeNavBtnRef.current) {
      navRef.current.classList.add("hidden");
      openNavBtnRef.current.classList.remove("hidden");
      closeNavBtnRef.current.classList.add("hidden");
    }
  };

  return (
    <div className="w-screen min-h-screen overflow-y-scroll bg-white pt-6 md:pt-0 mt-25">
      {/* NAVIGATION */}
      <nav className="w-full sm:w-10/12 lg:w-8/12 mx-auto relative z-10 flex items-center justify-between dark:bg-white bg-black/80 md:mt-10 py-4 text-white dark:text-black border-b border-green-600/20 dark:border-green-600/20 shadow-lg shadow-green-400/20">
        <div className="flex-shrink-0 px-4"></div>

        <a href="#" className="text-xl font-bold text-gray-700">
          <span className="px-1 bg-green-400 rounded-full animate-[ping_1.9s_linear_infinite]">
            A
          </span>
          <span className="px-1 bg-green-400 rounded-full animate-[ping_2s_linear_infinite]">
            K
          </span>
          <span className="px-1 bg-green-400 rounded-full animate-[ping_2.1s_linear_infinite]">
            U
          </span>
        </a>

        {/* Floating AUGUSTA Label */}
        <div className="absolute bg-black w-full h-full top-0 left-0 flex items-center justify-between px-6 pointer-events-none">
          <a href="#" className="text-xl font-bold text-gray-700">
            <span className="px-1 bg-green-400 rounded-full animate-[ping_1.9s_linear_infinite]">
              C
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2s_linear_infinite]">
              U
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.1s_linear_infinite]">
              S
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.2s_linear_infinite]">
              T
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.3s_linear_infinite]">
              O
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.4s_linear_infinite]">
              M
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.4s_linear_infinite]">
              E
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.4s_linear_infinite]">
              R
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.4s_linear_infinite]">
              S
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.4s_linear_infinite]">
              U
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.4s_linear_infinite]">
              P
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.4s_linear_infinite]">
              P
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.4s_linear_infinite]">
              O
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.4s_linear_infinite]">
              R
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.4s_linear_infinite]">
              T
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.4s_linear_infinite]">
              S
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.4s_linear_infinite]">
              P
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.4s_linear_infinite]">
              E
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.4s_linear_infinite]">
              C
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.4s_linear_infinite]">
              I
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.4s_linear_infinite]">
              A
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.4s_linear_infinite]">
              L
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.4s_linear_infinite]">
              I
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.4s_linear_infinite]">
              S
            </span>
            <span className="px-1 bg-green-400 rounded-full animate-[ping_2.4s_linear_infinite]">
              T
            </span>
          </a>
        </div>

        <div className="hidden md:flex justify-start pl-4 pr-2 py-1">
          <Link
            to="/hire-me"
            className="bg-green-700 text-white px-6 py-2 rounded-md relative overflow-hidden group"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition duration-500"></span>
            <span className="relative z-10 font-bold text-gray-800">
              Hire Me
            </span>
          </Link>
        </div>

        <button
          className="block md:hidden text-3xl pr-4"
          ref={openNavBtnRef}
          onClick={handleOpenNav}
        >
          <i className="uil uil-bars"></i>
        </button>
        <button
          className="hidden md:hidden text-3xl pr-4"
          ref={closeNavBtnRef}
          onClick={handleCloseNav}
        >
          <i className="uil uil-multiply"></i>
        </button>

        <ul
          ref={navRef}
          className="hidden md:hidden sm:w-full w-[98%] mx-auto absolute top-[4rem] left-0 right-0 flex-col items-center gap-4 bg-black dark:bg-white rounded-b cursor-pointer shadow shadow-green-600"
        >
          <li className="p-2 rounded hover:shadow hover:shadow-green-600">
            <Link
              to="/hire-me"
              className="bg-green-600 text-white px-6 py-2 rounded-md relative overflow-hidden group"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition duration-500"></span>
              <span className="relative z-10 font-bold text-gray-800">
                Hire Me
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* HERO CONTENT */}
      <div className="w-[90%] md:w-[88%] mx-auto flex flex-col lg:flex-row gap-6 items-center text-white dark:text-black justify-between py-12 md:py-20">
        {/* Left */}
        <div className="w-full flex flex-col gap-6">
          <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold">
            Hi there, I am
          </h1>
          <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold text-green-600">
            Promise Ikut!
          </h1>

          <p className="sm:text-lg text-gray-800 text-md">
            A highly detail-oriented and proactive professional with extensive
            experience as a <strong>Customer Support Specialist</strong>,
            <strong>Virtual Assistant</strong>, and{" "}
            <strong>Operations Manager</strong>. I specialize in streamlining
            tasks and workflows, overseeing operations management and process
            improvement, and managing operations data and CRM systems. I deliver
            top-tier customer support, ensure seamless communication and issue
            resolution, and consistently enhance customer experiences and client
            satisfaction
          </p>

          <div className="flex gap-2 flex-wrap">
            <Link
              to="/hire-me"
              className="bg-green-600 text-white px-6 py-2 rounded-md relative overflow-hidden group"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition duration-500"></span>
              <span className="relative z-10 font-bold text-gray-800">
                Hire Me
              </span>
            </Link>

            <Link
              to="/latest-projects"
              className="bg-green-600 text-white px-6 py-2 rounded-md relative overflow-hidden group"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition duration-500"></span>
              <span className="relative z-10 font-bold text-gray-800">
                Latest Projects
              </span>
            </Link>
          </div>

          <div className="flex items-center sm:gap-10 gap-6 mt-4">
            <div className="flex flex-col gap-1">
              <h4 className="text-xl sm:text-3xl font-bold">
                5<sup className="font-bold -ml-1">+</sup>
              </h4>
              <p className="text-sm sm:text-base text-gray-300 dark:text-gray-800">
                Years Experience
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-xl sm:text-3xl font-bold">70+</h4>
              <p className="text-sm sm:text-base text-gray-300 dark:text-gray-800">
                Projects Completed
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-xl sm:text-3xl font-bold">98%</h4>
              <p className="text-sm sm:text-base text-gray-300 dark:text-gray-800">
                Faster Project Delivery
              </p>
            </div>
          </div>
        </div>

        {/* Right Image with badges visible on all screens */}
        <div className="xl:w-1/2 w-full flex items-center justify-center mt-8 lg:mt-0">
          <div className="relative bg-black border border-none dark:border-gray-300 rounded-lg p-2 dark:bg-white w-[90%] sm:w-[70%] md:w-[60%]">
            <img
              className="w-full object-center object-cover rounded-md"
              src={image}
              alt="Uchechi Augusta Aku"
            />
            <div className="absolute bg-green-600 text-gray-800 shadow-md shadow-green-600 animate-bounce px-2 py-1 rounded top-4 left-2 sm:top-10 sm:-left-10 border border-gray-400 z-10 text-xs sm:text-sm">
              <h3 className="font-bold">Customer Support Specialist</h3>
            </div>
            <div className="absolute bg-green-600 text-gray-800 shadow-md shadow-green-600 animate-bounce px-2 py-1 rounded top-1/2 right-2 sm:-right-14 border border-gray-400 z-10 text-xs sm:text-sm">
              <h3 className="font-bold">Operations Manager</h3>
            </div>
            <div className="absolute bg-green-600 text-gray-800 shadow-md shadow-green-600 animate-bounce px-2 py-1 rounded bottom-8 left-2 sm:bottom-20 sm:-left-14 border border-gray-400 z-10 text-xs sm:text-sm">
              <h3 className="font-bold">Virtual Assistant</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

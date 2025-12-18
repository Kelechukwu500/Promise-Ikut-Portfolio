import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-screen bg-black text-white py-10 mt-20">
      <div className="w-[90%] md:w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-green-500">
            Promise Ikut
          </h2>
          <p className="text-gray-400 mt-2">
            Customer Support Specialist| Executive & Virtual Assistant
          </p>
          <p className="text-sm text-gray-500 mt-1">
            © {new Date().getFullYear()} All rights reserved. Created by Kaycee
            Tech.
          </p>
        </div>

        {/* Right - Social Links with Message */}
        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/share/1BWCWRyrqN/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition duration-300 text-xl"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/promise_techsis?igsh=MTVlMGNwYmRrYjN4ZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition duration-300 text-xl"
          >
            <FaInstagram />
          </a>

          <a
            href="https://linkedin.com/in/promiseikut"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition duration-300 text-xl"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=2347067065403&text=Hi%20Promise%2C%20I’m%20impressed%20with%20your%20background%20and%20would%20love%20to%20discuss%20a%20professional%20opportunity%20with%20you"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition duration-300 text-xl"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Back to Top */}
      <div className="text-center mt-6">
        <a
          href="#"
          className="text-sm text-green-400 hover:underline transition duration-300"
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;

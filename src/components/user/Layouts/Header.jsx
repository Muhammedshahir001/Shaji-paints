import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaPhone } from "react-icons/fa";
import logo from "../../../images/Shaji New Black-01.png";
import englishFlag from "../../../images/united-kingdom.png";
import arabicFlag from "../../../images/dubai-flag.png";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
      <div className="hidden lg:block">
        <section className="bg-green-700 text-white flex justify-between items-center p-4">
          <div className="flex space-x-4 pl-20">
            <a href="https://facebook.com" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://whatsapp.com" className="hover:text-gray-400">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="flex space-x-4 items-center pr-40">
            <a href="tel:+34627022182" className="hover:text-gray-400">
              <i className="fas fa-phone-alt"></i> (+34) 627 022 182
            </a>
            <a href="mailto:info@mincoh.com" className="hover:text-gray-400">
              <i className="fas fa-envelope"></i> info@mincoh.com
            </a>
          </div>
        </section>
      </div>

      <nav
        style={{ zIndex: 100, position: "relative" }}
        className="bg-black dark:bg-gray-900 fixed w-screen z-30 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
      >
        <div className="hidden lg:block">
          <div className=" flex gap-10 justify-between  p-5">
            <div className="ml-[5%]">
              <img src={logo} className="w-fit  h-8" alt="" />
            </div>
            <div
              className="flex md:order-2 space-x-3  rtl:space-x-reverse"
              style={{ zIndex: 100, position: "relative" }}
            ></div>
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } lg:block items-center justify-between w-full  lg:order-1`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 lg:p-0 mt-4  font-medium border border-gray-100 rounded-lg sm:gap-5 2xl:gap-14 lg:flex-row lg:mt-0 lg:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="#"
                    className="block py-2 px-3 text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white lg:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 px-3  text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white lg:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Become a Distributor
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 px-3  text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white lg:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 px-3  text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white lg:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Business Sector
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 px-3  text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white lg:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 px-3  text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white lg:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Latest News
                  </Link>
                </li>
                {/* Login Button */}
                <li>
                  <Link
                    to="#"
                    className="flex items-center justify-center py-2 px-4 w-32 text-white rounded-full border border-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white lg:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <FaUser className="mr-2" />
                    Login
                  </Link>
                </li>
                {/* Contact Button */}
                <li className="mt-4 lg:mt-0">
                  {" "}
                  {/* Adding margin top only on smaller screens */}
                  <Link
                    to="#"
                    className="flex items-center justify-center py-2 px-4 w-32 text-white rounded-full border border-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white lg:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <FaPhone className="mr-2" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <div className=" flex flex-col gap-10 justify-between  p-2">
            <div className="flex justify-between p-2 w-full">
              <Link
                href="#"
                class="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img src={logo} class="h-8" alt="" />
              </Link>

              <div>
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-sticky"
                  aria-expanded={isMenuOpen ? "true" : "false"}
                  style={{ zIndex: 101 }} // Adjusted zIndex here
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        isMenuOpen
                          ? "M4 8h9M4 4h9M4 12h9"
                          : "M1 1h15M1 7h15M1 13h15"
                      }
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } lg:block items-center justify-between w-full  lg:order-1`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 lg:p-0 font-medium border border-gray-100 rounded-lg sm:gap-5 2xl:gap-14 lg:flex-row lg:mt-0 lg:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="#"
                    className="block py-2 px-3 text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white lg:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 px-3  text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white lg:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Become a Distributor
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 px-3  text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white lg:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 px-3  text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white lg:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Business Sector
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 px-3  text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white lg:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 px-3  text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white lg:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Latest News
                  </Link>
                </li>
                {/* Login Button */}
                <li>
                  <Link
                    to="#"
                    className="flex items-center justify-center py-2 px-4 w-32 text-white rounded-full border border-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white lg:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <FaUser className="mr-2" />
                    Login
                  </Link>
                </li>
                {/* Contact Button */}
                <li className="mt-4 lg:mt-0">
                  {" "}
                  {/* Adding margin top only on smaller screens */}
                  <Link
                    to="#"
                    className="flex items-center justify-center py-2 px-4 w-32 text-white rounded-full border border-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white lg:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <FaPhone className="mr-2" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

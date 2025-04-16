import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faXmark } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Home", path: "/" },
    { name: "Sign In", path: "/signin" },
    { name: "Sign Up", path: "/signup" },
  ];
  return (
    <nav className="fixed w-full z-50 transition-all duration-300">
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  rounded-lg`}>
        <div className="flex h-16 items-center justify-between">
          <span className="text-2xl font-bold text-blue-500 dark:text-blue-400 tracking-tight">
            IEEE
          </span>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-medium hover:text-blue-300 transition duration-200"
                    : "text-blue-400/80 font-medium hover:text-blue-300 transition duration-200"
                }
              >
                {link.name}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 inline-flex items-center justify-center p-2 rounded-md text-zinc-700 hover:bg-zinc-300 hover:dark:bg-zinc-600 bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-200 cursor-pointer focus:outline-none"
              aria-expanded="false"
            >
              {isOpen ? (
                <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
              ) : (
                <FontAwesomeIcon icon={faBurger} className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="px-2 pt-2 pb-3 space-y-1 bg-zinc-800 shadow-lg mx-4 mt-2 rounded-lg">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "bg-zinc-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  : "text-gray-300 hover:bg-zinc-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;

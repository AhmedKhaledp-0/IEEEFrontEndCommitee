import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Sign In", path: "/signin" },
    { name: "Sign Up", path: "/signup" },
  ];
  return (
    <nav className="flex justify-between w-full items-center fixed top-1 p-4">
      <div className="flex items-center justify-between w-full max-w-7xl bg-zinc-800  text-white p-2 rounded-2xl mx-auto">
        <h1 className="text-2xl font-bold pl-2">IEEE </h1>
        <div className="flex gap-4">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-zinc-200  hover:text-zinc-200"
                  : "text-zinc-400  hover:text-zinc-200"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default NavBar;

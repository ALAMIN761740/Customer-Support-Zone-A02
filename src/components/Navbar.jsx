import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-7xl  mx-auto px-6 py-4 flex items-center justify-between">
      
      {/* Left - Logo */}
      <div className="flex-1">
        <a className="text-2xl font-bold text-primary">
          CS — Ticket System
        </a>
      </div>

      {/* Right - Menu (Desktop) */}
      <div className="flex-none gap-4 hidden md:flex items-center">
        <a className="btn btn-ghost">Home</a>
        <a className="btn btn-ghost">FAQ</a>
        <a className="btn btn-ghost">Changelog</a>
        <a className="btn btn-ghost">Blog</a>
        <a className="btn btn-ghost">Download</a>
        <a className="btn btn-ghost">Contact</a>

        {/* Gradient New Ticket Button */}
        <button className="px-4 py-2 rounded-lg text-white font-semibold
                   bg-[linear-gradient(to_bottom_right,#632EE3_10%,#9F62F2_90%)]
                   hover:opacity-90 transition">
        + New Ticket
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className="dropdown dropdown-end md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          ☰
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
          <li><a className="block text-center px-4 py-2 rounded-lg text-white font-semibold
                bg-[linear-gradient(to_bottom_right,#632EE3_10%,#9F62F2_90%)]
                hover:opacity-90 transition">
                    + New Ticket
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
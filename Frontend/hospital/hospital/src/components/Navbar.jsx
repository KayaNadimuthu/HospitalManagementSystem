import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-2 px-3 flex justify-between items-center">
      <div className="text-cyan-400 text-2xl font-bold">Life HealthCare</div>
      <ul className="flex gap-4">
        <li className="cursor-pointer hover:text-cyan-500">Health plans</li>
        <li className="cursor-pointer hover:text-cyan-500">Appointment</li>
        <li className="cursor-pointer hover:text-cyan-500">Consultants</li>
        <li className="cursor-pointer hover:text-cyan-500">Resources</li>
        <li className="cursor-pointer hover:text-cyan-500">About</li>
      </ul>
      <div>
        <Link
          to="/login"
          className="bg-cyan-500 px-4 py-2 text-gray-100 rounded"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

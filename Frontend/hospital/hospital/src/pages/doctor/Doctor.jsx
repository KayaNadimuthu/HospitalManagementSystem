import React from "react";
import { Link } from "react-router-dom";


const Doctor = () => {
  return (
    <div>
      <div className="flex px-2 py-3 justify-between items-center bg-gray-50">
        <h1 className="text-cyan-500 text-3xl">Doctor</h1>
        <Link to="/" className="bg-cyan-500 px-4 py-2 text-gray-100 rounded">
          Sign Out
        </Link>
      </div>
      <h1 className="text-4xl my-10 pl-3">My Patients</h1>

      <div className="flex flex-col justify-center px-2 mt-4 gap-2">
        <div className="flex bg-slate-50">
          <p className="w-1/4 p-1">Name</p>
          <p className="w-1/4 p-1">Email</p>
          <p className="w-1/4 p-1">Phone</p>
          <p className="w-1/4 p-1">Actions</p>
        </div>
        <div className="flex items-center">
          <p className="w-1/4 p-1">Narmatha</p>
          <p className="w-1/4 p-1">narmatha@gmail.com</p>
          <p className="w-1/4 p-1">6787656545</p>
          <button className="text-white bg-green-500 px-3 py-2 rounded mr-2">
            Accept 
          </button>
          <button className="text-white bg-red-500 px-3 py-2 rounded">
            Remove 
          </button>
        </div>
        <div className="flex items-center">
          <p className="w-1/4 p-1">viswa</p>
          <p className="w-1/4 p-1">viswa@gmail.com</p>
          <p className="w-1/4 p-1">8978876789</p>
          <button className="text-white bg-green-500 px-3 py-2 rounded mr-2">
            Accept
          </button>
          <button className="text-white bg-red-500 px-3 py-2 rounded">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Doctor;

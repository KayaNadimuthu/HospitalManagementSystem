import React from "react";
import { Link } from "react-router-dom";

export const Patients = () => {
  return (
    <div>
      <div className="flex px-2 py-3 justify-between items-center bg-gray-50">
        <h1 className="text-cyan-500 text-3xl">Patient</h1>
        <Link to="/" className="bg-cyan-500 px-4 py-2 text-gray-100 rounded">
          Sign Out
        </Link>
      </div>
      <h1 className="text-4xl my-10 pl-3">Patient Details</h1>
      <div className="flex flex-col gap-4 px-3 text-2xl">
        <div className="flex gap-2 item-center">
          <span className=" text-cyan-500">Name:</span>
          <span>narmatha</span>
        </div>
        <div className="flex gap-2 item-center">
          <span className="text-cyan-500">Email:</span>
          <span>narmatha@gmail.com</span>
        </div>
        <div className="flex gap-2 item-center">
          <span className="text-cyan-500">Phone:</span>
          <span>7878987890</span>
        </div>
        <div className="flex gap-2 item-center">
          <span className="text-cyan-500">Age:</span>
          <span>20</span>
        </div>
        <div className="flex gap-2 item-center">
          <span className="text-cyan-500">Health issue:</span>
          <span>Diabetes</span>
        </div>
      </div>
    </div>
  );
};

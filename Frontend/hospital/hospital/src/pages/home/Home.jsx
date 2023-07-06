import React from "react";
import Navbar from "../../components/Navbar";
import {
  HeartIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex py-4">
        <img className="w-1/2" src="doctor.jpg" />
        <div className="flex flex-col gap-3 justify-center bg-gray-50 pl-5">
          <p className="text-cyan-500 text-6xl w-2/3">
            The next generation of care for women and families
          </p>
          <p className=" w-3/4">
            One health pioneering virtual care model is built around women and
            families, delivering better outcomes lower costs for everyone.
          </p>
          <div className="w-3/4 flex gap-1 border justify-between rounded overflow-hidden shadow bg-white">
            <input
              type="text"
              placeholder="Find out what are the treatments offered"
              className="w-2/3 focus:outline-none pl-2 bg-transparent"
            ></input>
            <button className="bg-cyan-500 text-gray-100 px-3 py-2">
              Find Out!
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-20">
        <div className=" w-3/4 flex justify-evenly items-center py-10 shadow rounded">
          <div className="flex flex-col items-center justify-center gap-1 px-3 border-r">
            <span className="block text-cyan-500 text-4xl font-extrabold">
              500+
            </span>
            <span className="block text-gray-400">Total Review</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 px-3 border-r">
            <span className="block text-cyan-500 text-4xl font-extrabold">
              14+
            </span>
            <span className="block text-gray-400">Years of experience</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 px-3 border-r">
            <span className="block text-cyan-500 text-4xl font-extrabold">
              17.3K
            </span>
            <span className="block text-gray-400">Monthly Activities</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 px-3">
            <span className="block text-cyan-500 text-4xl font-extrabold">
              48K
            </span>
            <span className="block text-gray-400">Total Users</span>
          </div>
        </div>
      </div>
      <div className="py-10">
        <p className="text-cyan-500 text-5xl text-center font-bold my-2">
          We're setting a new standard of care for families
        </p>
        <p className="text-cyan-500 text-5xl text-center font-bold my-2">
          across geographies and backgrounds.
        </p>
        <p className="text-gray-400 text-xl text-center my-2">
          One Health pioneering virtual care model is built around women and
          families
        </p>
        <p className="text-gray-400 text-xl text-center my-2">
          delivering better outcomes and lower costs for everyone.
        </p>
      </div>
      <div className="flex items-center justify-center gap-10 pb-5">
        <div className="border flex items-center flex-col gap-4 rounded-lg w-1/4 p-2 text-center h-60 shadow-sm">
          <HeartIcon className="w-20 text-cyan-500" />
          <p className="text-2xl text-cyan-500">Whole person care</p>
          <p className="text-gray-500">
            A holistic approach that offers comperhensive care for all families
          </p>
        </div>
        <div className="border rounded-lg w-1/4 p-2 text-center h-60 flex items-center flex-col gap-4 ">
          <ChartBarIcon className="w-20 text-cyan-500" />
          <p className="text-2xl text-cyan-500">Lower costs</p>
          <p className="text-gray-500">
            Dedicated care Advocates and data-driven insights deliver better
            outcomes
          </p>
        </div>
        <div className="border rounded-lg w-1/4 p-2 text-center h-60 flex items-center flex-col gap-4 ">
          <CurrencyDollarIcon className="w-20 text-cyan-500" />
          <p className="text-2xl text-cyan-500">Expentional outcomes</p>
          <p className="text-gray-500">
            Proactive intervention reduces he need for costly procedures
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Approvalpage from "../../components/Approvalpage";

const Admin = () => {
  const [tab, setTab] = useState("New Registerations");
  const [show,setshow]=useState(false)
  const navigate = useNavigate();
  const handleSubmit = () => {   
  
    setshow(true)
    console.log("hello",show);
      // navigate("/Approvalpage");
    }
  return (
    <div>
      <div className="flex px-2 py-3 justify-between items-center bg-gray-50">
        <h1 className="text-cyan-500 text-3xl">Admin</h1>
        <Link to="/" className="bg-cyan-500 px-4 py-2 text-gray-100 rounded">
          Sign Out
        </Link>
      </div>
      <div className="w-full flex items-center justify-center gap-10 py-5">
        <button
          className={
            tab === "New Registerations"
              ? "tab tab-active"
              : "tab hover:bg-cyan-500 hover:text-gray-200"
          }
          onClick={() => setTab("New Registerations")}
        >
          New Registrations
        </button>
        <button
          className={
            tab === "Doctors"
              ? "tab tab-active"
              : "tab hover:bg-cyan-500 hover:text-gray-200"
          }
          onClick={() => setTab("Doctors")}
        >
          Doctors
        </button>
        <button
          className={
            tab === "Patients"
              ? "tab tab-active"
              : "tab hover:bg-cyan-500 hover:text-gray-200"
          }
          onClick={() => setTab("Patients")}
        >
          Patients
        </button>
      </div>
      {tab === "New Registerations" && (
        <div className="flex flex-col justify-center px-2 mt-4 gap-2">
          <div className="flex bg-slate-50">
            <p className="w-1/4 p-1">Name</p>
            <p className="w-1/4 p-1">Email</p>
            <p className="w-1/4 p-1">Phone</p>
            <p className="w-1/4 p-1">Actions</p>
          </div>
          <div className="flex items-center">
            <p className="w-1/4 p-1">Jhone</p>
            <p className="w-1/4 p-1">jhone@gmail.com</p>
            <p className="w-1/4 p-1">1234567890</p>
            <button className="text-white bg-green-500 px-3 py-2 rounded mr-2" onClick={() => handleSubmit()}>
              Approve
            </button>
            <button className="text-white bg-red-500 px-3 py-2 rounded">
              Reject
            </button>
          </div>
          <div className="flex items-center">
            <p className="w-1/4 p-1">Daisy</p>
            <p className="w-1/4 p-1">daisy@gmail.com</p>
            <p className="w-1/4 p-1">7898765678</p>
            <button className="text-white bg-green-500 px-3 py-2 rounded mr-2" onClick={() => handleSubmit()}>
              Approve
            </button>
            <button className="text-white bg-red-500 px-3 py-2 rounded">
              Reject
            </button>
          </div>
        </div>
      )}
      {tab === "Doctors" && (
        <div className="flex flex-col justify-center px-2 mt-4 gap-2">
          <div className="flex bg-slate-50">
            <p className="w-1/4 p-1">Name</p>
            <p className="w-1/4 p-1">Email</p>
            <p className="w-1/4 p-1">Phone</p>
            <p className="w-1/4 p-1">Actions</p>
          </div>
          <div className="flex items-center">
            <p className="w-1/4 p-1">Ram</p>
            <p className="w-1/4 p-1">ram@gmail.com</p>
            <p className="w-1/4 p-1">5687987867</p>
            <button className="text-white bg-green-500 px-3 py-2 rounded mr-2">
              Approve
            </button>
            <button className="text-white bg-red-500 px-3 py-2 rounded">
              Remove
            </button>
          </div>
          <div className="flex items-center">
            <p className="w-1/4 p-1">Sam</p>
            <p className="w-1/4 p-1">sam@gmail.com</p>
            <p className="w-1/4 p-1">7898786787</p>
            <button className="text-white bg-green-500 px-3 py-2 rounded mr-2">
              Approve
            </button>
            <button className="text-white bg-red-500 px-3 py-2 rounded">
              Remove
            </button>
          </div>
        </div>
      )}
      {tab === "Patients" && (
        <div className="flex flex-col justify-center px-2 mt-4 gap-2">
          <div className="flex bg-slate-50">
            <p className="w-1/4 p-1">Name</p>
            <p className="w-1/4 p-1">Email</p>
            <p className="w-1/4 p-1">Phone</p>
            <p className="w-1/4 p-1">Actions</p>
          </div>
          <div className="flex items-center">
            <p className="w-1/4 p-1">Jhone</p>
            <p className="w-1/4 p-1">jhone@gmail.com</p>
            <p className="w-1/4 p-1">6789890987</p>
            <button className="text-white bg-green-500 px-3 py-2 rounded mr-2" >
              Approve
            </button>
            <button className="text-white bg-red-500 px-3 py-2 rounded">
              Remove
            </button>
          </div>
          <div className="flex items-center">
            <p className="w-1/4 p-1">Daisy</p>
            <p className="w-1/4 p-1">daisy@gmail.com</p>
            <p className="w-1/4 p-1">7898765678</p>
            <button className="text-white bg-green-500 px-3 py-2 rounded mr-2">
              Approve
            </button>
            <button className="text-white bg-red-500 px-3 py-2 rounded">
              Remove
            </button>
          </div>
        </div>
       
      )}
       {show && <Approvalpage/>}
    </div>
  );
};

export default Admin;

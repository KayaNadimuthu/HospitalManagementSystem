import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import * as animationData from "../../assets/animation.json";
import Input from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  LockClosedIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";


const Login = () => {
  const [selectedValue, setSelectedValue] = useState('Doctor')
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [experience, setExperience] = useState("");
  const [age,setAge]=useState();
  const [issue,setIssue]=useState();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = false;
    
    if(username.length>5 && password.length>4 && phone.length==10 && password==confirmpassword && speciality.length>4 && experience.length>0 ){
      valid = true
      
    }
    if (valid){
      let payload={
        name: username,
        phone: phone,

      }
    axios.post("http://localhost:5184/api/Hospital/RegisterDoc",payload).then((e)=>{console.log(e)}).catch((e)=>{console.log(e)});
      console.log ("this is valid")
    if (username === "admin" && password === "admin") {
      navigate("/admin");
    }
  }
  };

  const handleChange = (event) => {
    console.log("fehvbv",event.target.value)
    setSelectedValue(event.target.value);
  };

  return (
    <div className="flex justify-center align-items-center h-screen">
      <div className="w-1/2 h-full flex items-center">
        <Lottie loop animationData={animationData} play className="w-100" />
      </div>

      <div className="w-1/2 flex flex-col gap-4 items-center justify-center">
        <h1 className="text-5xl text-cyan-400 mb-6">Sign Up</h1>
        <form
          className="w-1/2 flex flex-col items-center gap-3"
          onSubmit={(e) => handleSubmit(e)}
        >
          <select
      required={true}
      className="w-full gap-1 px-1 bg-cyan-50 h-10 border border-cyan-400 rounded shadow focus:outline-none"
      onChange={handleChange}
      value={selectedValue}
    >
      <option disabled>Select Account type</option>
      <option>Doctor</option>
      <option>Patient</option>
    </select>
            
          <Input
            type="text"
            label="Name"
            placeholder="james"
            Icon={<UserIcon className="w-6 text-cyan-400" />}
            value={username}
            setValue={setUsername}
            required={true}
          />
          <Input
            type="text"
            label="Phone"
            placeholder="1234567890"
            Icon={<PhoneIcon className="w-6 text-cyan-400" />}
            value={phone}
            setValue={setPhone}
            required={false}
          />
          <Input
            type="password"
            label="Password"
            placeholder="Password"
            Icon={<LockClosedIcon className="w-6 text-cyan-400" />}
            value={password}
            setValue={setPassword}
            required={true}
          />
          <Input
            type="password"
            label="Confirm Password"
            placeholder="Confirm Password"
            Icon={<LockClosedIcon className="w-6 text-cyan-400" />}
            value={confirmpassword}
            setValue={setConfirmPassword}
            required={true}
          />
          {selectedValue === "Doctor" 
          ? (
          <>
          <Input
            type="text"
            label="Speciality"
            placeholder="cardiology"
            Icon={<LockClosedIcon className="w-6 text-cyan-400" />}
            value={speciality}
            setValue={setSpeciality}
            required={true}
          />
          <Input
            type="text"
            label="Experience"
            placeholder="in years"
            Icon={<LockClosedIcon className="w-6 text-cyan-400" />}
            value={experience}
            setValue={setExperience}
            required={true}
          />
          </>
          ):(
          <>
          <Input
            type="text"
            label="Age"
            placeholder="in age"
            Icon={<LockClosedIcon className="w-6 text-cyan-400" />}
            value={experience}
            setValue={setAge}
            required={true}
          />
          <Input
            type="text"
            label="Issue"
            placeholder="in issue"
            Icon={<LockClosedIcon className="w-6 text-cyan-400" />}
            value={experience}
            setValue={setIssue}
            required={true}
          />
          </>
          )}
          
          {error && <span className="text-red-500">{error}</span>}
          <SubmitButton text="Submit" />
        </form>
        <div>
          <span className="mr-1">Already have account?</span>
          <Link to="/login" className="text-cyan-500">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

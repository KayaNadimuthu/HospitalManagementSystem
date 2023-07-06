import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import * as animationData from "../../assets/animation.json";
import Input from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      navigate("/admin");
      return;
    } else if (username === "patient" && password === "patient") {
      navigate("/patient");
      return;
    } else if (username === "doctor" && password === "doctor") {
      navigate("/doctor");
      return;
    }
    setError("Invalid credentials");
  }; 

 return (
    <div className="flex justify-center align-items-center h-screen">
      <div className="w-1/2 h-full flex items-center">
        <Lottie loop animationData={animationData} play className="w-100" />
      </div>

      <div className="w-1/2 flex flex-col gap-4 items-center justify-center">
        <h1 className="text-5xl text-cyan-400 mb-6">Sign in</h1>
        <form
          className="w-1/2 flex flex-col items-center gap-6"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input
            type="text"
            label="Email or Username"
            placeholder="example@gmail.com"
            Icon={<UserIcon className="w-6 text-cyan-400" />}
            value={username}
            setValue={setUsername}
            required={true}
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
          {error && <span className="text-red-500">{error}</span>}
          <SubmitButton text="Submit" />
        </form>
        <div>
          <span className="mr-1">Don't have account?</span>
          <Link to="/register" className="text-cyan-500">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

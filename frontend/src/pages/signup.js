import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';

const Register = () => {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    if (e.target.value === password) {
      setConfirmPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullName, email, password, confirmPassword);
  };

  return (
    <div className="container mx-auto">
      <div className="p-5">
        <div className="flex flex-row justify-between">
          <Link to="/"><img src={logo} className="w-16 pr-6" alt="logo" /></Link>
          <Link className="text-xl text-slate-400 pt-2">Diagnosis</Link>
          <Link className="text-xl text-slate-400 pt-2">Doctors</Link>
          <div className="pt-2">
            <Link to="/login" className="text-xl text-slate-400 px-3 bg-[#C9FDD7] pt-1 pb-2 rounded-lg hover:underline transition ease-in-out ">Login</Link>
          </div>
        </div>

        <div className="container py-10 mt-32">
          <div className="flex flex-row align-bottom">
            <h1 className="font-bold text-9xl underline decoration-[#79D1C3]">Register.</h1>
            <div className="pl-20 py-12 flex-1">
              <div className="max-w-md">
                <div className="grid grid-cols-1 gap-6">
                  <label className="block">
                    <span className="text-gray-700">Full name</span>
                    <input type="text" className="form-input w-full block rounded-lg border-gray-300" onChange={handleFullName} />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Email</span>
                    <input type="email" className="form-input w-full block rounded-lg border-gray-300" onChange={handleEmail} />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Password</span>
                    <input type="password" className="form-input w-full block rounded-lg border-gray-300" onChange={handlePassword} />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Confirm Password</span>
                    <input type="password" className="form-input w-full block rounded-lg border-gray-300" onChange={handleConfirmPassword} />
                  </label>
                  <button type="submit" onClick={handleSubmit} className="py-2 px-3 rounded-lg text-xl bg-[#79D1C3] text-[#C9FDD7] hover:text-white">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
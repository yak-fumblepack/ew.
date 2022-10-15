import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import ewmu2 from '../assets/images/ewmu2.png';


const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="p-5">
        <div className="flex flex-row justify-between">
          <img src={logo} className="w-16 pr-6" alt="logo" />
          <Link className="text-xl text-slate-400 pt-2" to="/dashboard/upload">Diagnosis</Link>
          <Link className="text-xl text-slate-400 pt-2">Doctors</Link>
        </div>

        <div className="container py-10 mt-32">
          <div className="flex flex-row">
            <div className="grow">
              <h1 className="font-bold text-9xl underline decoration-[#79D1C3]">Ewmu</h1>
              <div className="py-6">
                <h2 className="text-slate-400 text-xl">Using cutting edge AI/ML models to diagnose your skin condition.<br />Quickly. Effectively.</h2>
              </div>
              <div className="py-11">
                <div className="flex flex-row">
                  <Link to="/dashboard/upload" className="py-2 px-3 rounded-lg text-xl bg-[#79D1C3] text-[#C9FDD7]">Get Started</Link>
                </div>
              </div>
            </div>
            <div className="">
              <img src={ewmu2} alt="" />
            </div>
          </div>

        </div>

      </div>
    </div >
  )
}

export default Home;
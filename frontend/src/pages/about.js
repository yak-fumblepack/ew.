import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="container mx-auto">
      <div className="p-5">
        <div className="flex flex-row gap-20">
          <img src={logo} className="w-16 pr-6" alt="logo" />
          <Link className="text-xl text-slate-400 pt-2" to="/dashboard/upload">Diagnosis</Link>
          <Link className="text-xl text-slate-400 pt-2">Doctors</Link>
          <Link className="text-xl text-slate-400 pt-2">About</Link>
          <a target="_blank" href="https://github.com/yak-fumblepack/ewmu" className="text-xl text-slate-400 pt-2" rel="noreferrer"><FaGithub size={28} /></a>
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
  );
}

export default AboutPage;
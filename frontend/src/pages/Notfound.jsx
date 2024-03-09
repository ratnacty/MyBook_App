import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/404.json";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="w-full h-screen bg-violet-200 flex justify-center items-center">
      <div className="w-1/2 bg-white shadow-lg mx-auto rounded-lg flex justify-around py-12 px-4">
        <div className="mt-8">
          <p className="text-6xl text-violet-700 font-semibold mb-4">404</p>
          <p className="text-normal text-slate-400 font-semibold mb-7">
            Oopps ! Page not found
          </p>
          <Link
            to="/"
            className="px-2 py-2 text-sm text-white bg-violet-600 mt-5 hover:bg-violet-800"
          >
            Back to home
          </Link>
        </div>

        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: 200, height: 200, marginTop: 20 }}
        />
      </div>
    </div>
  );
}

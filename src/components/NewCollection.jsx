// eslint-disable-next-line no-unused-vars
import React from "react";
import recomend1 from "../assets/recomend1.png";
import recomend2 from "../assets/recomend2.png";
import recomend3 from "../assets/recomend3.png";
import recomend4 from "../assets/recomend4.jpg";
import { FaAnglesRight } from "react-icons/fa6";

export default function NewCollection() {
  return (
    <div>
      <div className="flex">
        <h1 className="text-2xl font-serif text-blue-900 mb-5 mt-8 mx-8">
          New Collection
        </h1>
        <div>
          <FaAnglesRight className="fill-blue-900 mb-5 my-10" />
        </div>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 max-sm:grid-cols-1 gap-10 w-full px-10 ">
        <div className=" w-3/10 py-3 px-5 rounded-lg bg-white shadow-lg ">
          <img src={recomend4} alt="" className="w-full h-56 py-3" />

          <div className="text-normal text-blue-900 font-semibold w-fit">
            <p className="">Book Title</p>
            <p>By Author</p>
          </div>

          <div className="flex justify-center">
            <button className="py-1 px-8 rounded-lg text-white text-sm bg-blue-900 my-2 mt-2">
              Read
            </button>
          </div>
        </div>

        <div className=" w-3/10 py-2 px-5 rounded-lg bg-white shadow-lg">
          <img src={recomend1} alt="" className="w-fit h-56 py-3" />

          <div className="text-normal text-blue-900 font-semibold w-fit">
            <p>Psicology Of Money</p>
            <p>By Author</p>
          </div>

          <div className="flex justify-center">
            <button className="py-1 px-8 rounded-lg text-white text-sm bg-blue-900 my-2 mt-2">
              Read
            </button>
          </div>
        </div>

        <div className=" w-3/10 py-2 px-5 rounded-lg bg-white shadow-lg">
          <img src={recomend3} alt="" className="w-fit h-56 py-3" />

          <div className="text-normal text-blue-900 font-semibold w-fit">
            <p>Psicology Of Money</p>
            <p>By Author</p>
          </div>

          <div className="flex justify-center">
            <button className="py-1 px-8 rounded-lg text-white text-sm bg-blue-900 my-2 mt-2">
              Read
            </button>
          </div>
        </div>

        <div className=" w-3/10 py-2 px-5 rounded-lg bg-white shadow-lg">
          <img src={recomend2} alt="" className="w-fit h-56 py-3" />

          <div className="text-normal text-blue-900 font-semibold w-fit">
            <p>Psicology Of Money</p>
            <p>By Author</p>
          </div>

          <div className="flex justify-center">
            <button className="py-1 px-8 rounded-lg text-white text-sm bg-blue-900 my-2 mt-2">
              Read
            </button>
          </div>
        </div>

        <div className=" w-3/10 py-2 px-5 rounded-lg bg-white shadow-lg">
          <img src={recomend4} alt="" className="w-fit h-56 py-3" />

          <div className="text-normal text-blue-900 font-semibold w-fit">
            <p>Psicology Of Money</p>
            <p>By Author</p>
          </div>

          <div className="flex justify-center">
            <button className="py-1 px-8 rounded-lg text-white text-sm bg-blue-900 my-2 mt-2">
              Read
            </button>
          </div>
        </div>

        <div className=" w-3/10 py-2 px-5 rounded-lg bg-white shadow-lg">
          <img src={recomend1} alt="" className="w-fit h-56 py-3" />

          <div className="text-normal text-blue-900 font-semibold w-fit">
            <p>Psicology Of Money</p>
            <p>By Author</p>
          </div>

          <div className="flex justify-center">
            <button className="py-1 px-8 rounded-lg text-white text-sm bg-blue-900 my-2 mt-2">
              Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

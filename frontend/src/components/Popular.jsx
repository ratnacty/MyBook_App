// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.png";

export default function Popular() {
  return (
    <div className="w-full bg-violet-300 h-86 flex justify-around py-12 rounded-xl md:px-4 max-sm:block max-sm:px-2">
      <div className="py-2 block">
        <p className="text-3xl text-white font-bold font-serif py-2 mb-3 max-sm:text-xl">
          Explore our website
        </p>
        <p className="text-lg text-white mb-8 max-sm:text-sm">
          for a curated selection of popular books, <br />
          providing an engaging and dynamic literary experience. Navigate <br />
          seamlessly, discover hidden gems, and indulge in a diverse range of
          <br />
          genres. Trust us for a gratifying journey into timeless classics and{" "}
          <br />
          contemporary bestsellers, tailored to your reading preferences.
        </p>

        <Link
          to="/all-category"
          className="py-2 px-2 bg-white text-blue-900 text-sm rounded shadow-slate-700 shadow-lg hover:bg-violet-600 hover:text-white"
        >
          Explore More
        </Link>
      </div>

      <div className="flex max-sm:mt-5 max-sm:px-4 ">
        <img
          src={book1}
          alt=""
          className="w-42 h-56 shadow-slate-800 shadow-lg max-sm:w-32 max-sm:h-32"
        />
        <img
          src={book2}
          alt=""
          className="w-42 h-56 relative -left-14 shadow-slate-800 shadow-lg max-sm:w-32 max-sm:h-32"
        />
      </div>
    </div>
  );
}

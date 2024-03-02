// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

export default function HeaderHome() {
  return (
    <div className="flex justify-between px-10 max-sm:block">
      <div>
        <h1 className="text-2xl font-serif text-blue-900 mt-2 max-sm:text-xl">
          MyBook
        </h1>
      </div>

      <div className="flex gap-10 max-sm:gap-4 max-sm:text-sm max-sm:font-normal">
        <Link
          to="/all-category"
          className="text-blue-900 font-semibold mt-2 hover:text-violet-600"
        >
          All Category
        </Link>
        <Link
          to="/collection"
          className="text-blue-900 font-semibold mt-2 hover:text-violet-600"
        >
          Collection
        </Link>
        <button className="ml-10 px-4 py-2 bg-blue-900 rounded text-white hover:bg-violet-600">
          Login
        </button>
      </div>
    </div>
  );
}

// HeaderHome.js
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const HeaderHome = () => {
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex justify-between px-10 max-sm:block">
      <div>
        <h1 className="text-xl font-serif text-blue-900 mt-2 max-sm:text-xl font-semibold">
          My
          <span className=" text-3xl text-yellow-800 max-sm:text-xl">
            Book_
          </span>
        </h1>
      </div>

      <div className="flex gap-10 max-sm:gap-4 max-sm:text-sm max-sm:font-normal ">
        <Link
          to="/all-category"
          className="text-blue-900 font-semibold mt-2 hover:text-violet-600 "
        >
          All
        </Link>
        <Link
          to="/collection"
          className="text-blue-900 font-semibold mt-2 hover:text-violet-600"
        >
          Collection
        </Link>

        {/* Conditional rendering based on authentication status */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="ml-10 px-4 py-2 bg-yellow-900 rounded text-white hover:bg-yellow-800"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="ml-10 px-4 py-2 bg-blue-900 rounded text-white hover:bg-violet-600"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeaderHome;

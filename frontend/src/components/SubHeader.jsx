// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function SubHeader({ searchTerm, onSearchChange, onSearch }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <div className="w-11/12 py-12 mx-auto text-center">
        <div className="flex flex-row gap-4">
          <button onClick={handleBack} type="button" className="basis-1/3 h-14 ">
            <IoChevronBackCircleSharp className="fill-violet-300 text-white w-14 h-12 " />
          </button>

          <h1 className="mb-5 text-3xl text-blue-900 font-serif basis-1/3 max-sm:text-xl">
            My Book Explorer
          </h1>
        </div>

        <div>
          {/* <div>
              <input
                type="text"
                placeholder="Search for books..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button onClick={handleSearch}>Search</button>
            </div> */}

          <input
            type="search"
            className="w-6/12 h-10 bg-slate-200 text-blue-900 px-4 py-1 rounded-2xl outline-none font-semibold max-sm:w-10/12"
            placeholder="search for books..."
            value={searchTerm}
            onChange={onSearchChange}
          />
          <button
            onClick={onSearch}
            className="bg-blue-900 text-white px-2 py-2 rounded-lg mx-2"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

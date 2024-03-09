// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { fetchBooks } from "../components/api";
import { Link } from "react-router-dom";

export default function NewCollection() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch recommended books
    fetchBooks("romance").then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <div className="flex">
        <h1 className="text-2xl font-serif text-blue-900 mb-5 mt-8 mx-8">
          New Collection
        </h1>

        <Link to="/collection">
          <FaAnglesRight className="fill-blue-900 mb-5 my-10" />
        </Link>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 max-sm:grid-cols-1 gap-10 w-full px-10 ">
        {books.map((book) => (
          <div
            key={book.id}
            className=" w-3/10 py-3 px-5 rounded-lg bg-white shadow-lg "
          >
            <img
              src={
                book.volumeInfo.imageLinks?.thumbnail ||
                "https://via.placeholder.com/150"
              }
              alt={book.volumeInfo.title}
              className="w-full h-56 py-3"
            />

            <div className="text-normal text-blue-900 font-semibold w-fit">
              <p className="">{book.volumeInfo.title}</p>
              <p className="text-xs text-slate-500 font-thin">
                By{book.volumeInfo.authors || "Unknown Author"}
              </p>
            </div>

            <div className="flex justify-center">
              <button className="py-1 px-8 rounded-lg text-white text-sm bg-blue-900 my-2 mt-2">
                Read
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import { fetchBooks } from "../components/api";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Recomendation() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch recommended books
    fetchBooks("Love").then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <div className="flex">
        <h1 className="text-2xl font-serif text-blue-900 mb-5 mx-8 my-2">
          Recomendation
        </h1>
        <div>{/* <FaAnglesRight className="fill-blue-900 mb-5 my-4" /> */}</div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-6 px-8 max-sm:px-2">
        {books.slice(0, 3).map((book) => (
          <div
            key={book.id}
            className="bg-violet-100 w-full h-56 rounded-lg flex max-sm:h-44 "
          >
            <img
              src={
                book.volumeInfo.imageLinks?.thumbnail ||
                "https://via.placeholder.com/150"
              }
              alt={book.volumeInfo.title}
              className="w-fit h-38 py-3 pl-3 max-sm:size-44"
            />

            <div className="w-full text-sm max-sm:text-xs text-blue-900 block my-12 max-sm:my-10 bg-slate-100 py-2 max-sm:h-24 max-sm:py-1 ">
              <div className="px-2">
                <p className="text-normal font-semibold mb-2">
                  {book.volumeInfo.title}
                </p>
                <p> by {book.volumeInfo.authors}</p>
                <p> {book.volumeInfo.publisher}</p>
              </div>

              <div className="flex justify-end px-2">
                <Link
                  to={`/detail/${book.id}`}
                  className="text-sm max-sm:text-xs text-white bg-blue-900 px-4 max-sm:px-2 py-1 rounded-lg  hover:bg-violet-600 max-sm:mb-2"
                >
                  More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

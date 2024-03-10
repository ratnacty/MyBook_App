// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { fetchBooks, fetchBookDetails } from "../components/api";
import { bookmarkBook } from "../components/api";
import axios from "axios";

import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import recomend3 from "../assets/recomend3.png";

export default function Detail() {
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    // Fetch book details when the component mounts
    console.log(bookId);
    fetchBookDetails(bookId).then((data) => setBookDetails(data));
  }, [bookId]);

  if (!bookDetails) {
    return <p>Loading...</p>;
  }

  // const handleReadMore = (link) => {
  //   alert(link)
  // }

  // const googleId = bookId;
  // const title = bookDetails.volumeInfo.title;

  // console.log("google", googleId, title);

 
  return (
    <div>
      <div className="w-full mb-20">
        <SubHeader />

        <div className="lg:w-8/12 md:10/12 md:mx-8 md:px-10 mb-3 max-sm:mx-4 max-sm:px-2 bg-white shadow-xl rounded-lg  mt-5 px-14 py-5 lg:mx-auto ">
          <div className="flex px-8 py-5 gap-4 max-sm:px-2">
            <img
              src={
                bookDetails.volumeInfo.imageLinks?.thumbnail ||
                "https://via.placeholder.com/150"
              }
              alt={bookDetails.volumeInfo.title}
              className="w-fit h-60 py-3 pl-3"
            />
            <div className="w-full block my-10 px-5 ">
              <p className="text-violet-800 text-2xl font-serif font-semibold">
                {bookDetails.volumeInfo.title}
              </p>
              <p className="text-blue-900 text-md font-serif font-semibold">
                Author(s): {bookDetails.volumeInfo.authors.join(", ")}
              </p>
              <p className="text-blue-900 text-md font-serif font-semibold">
                {bookDetails.volumeInfo.publisher}
              </p>
              <p className="text-blue-900 text-md font-serif font-semibold">
                {bookDetails.volumeInfo.publishedDate}
              </p>

              <div className="flex gap-4 mt-3">
                {/* <button
                  onClick={handleBookmark}
                  className="bg-violet-500 text-white px-2 py-1  rounded-lg hover:bg-violet-700"
                >
                  add bookmark
                </button> */}
                {/* <button className="bg-violet-500 text-white px-2 py-1 rounded-lg hover:bg-violet-700">
                  add favorite
                </button> */}
              </div>

              <NavLink to={bookDetails.volumeInfo.previewLink} className="bg-blue-900 text-white px-3 py-1 mt-5 rounded-lg">
                Preview link
              </NavLink>
            </div>
          </div>

          <div className="px-8 py-5 mt-5">
            <p className="text-xl text-violet-600 mb-5">Sinopsis</p>

            <div className="text-normal text-blue-900">
              <p>{bookDetails.volumeInfo.description}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

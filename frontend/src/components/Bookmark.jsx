import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaAngleDoubleLeft, FaTrashAlt } from "react-icons/fa";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    // Fetch bookmarks when the component mounts
    fetchBookmarks();
  }, []);

  const fetchBookmarks = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);

      const response = await axios.get("http://localhost:5000/show-bookmark", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Update state with bookmarks data
      setBookmarks(response.data.bookmarks);
      console.log(response.data.bookmarks);

      // Fetch book details for each bookmark and update state
      const updatedBookmarks = await Promise.all(
        response.data.bookmarks.map(async (bookmark) => {
          const bookDetails = await fetchBookDetails(bookmark.googleId);
          return { ...bookmark, ...bookDetails };
        })
      );

      setBookmarks(updatedBookmarks);
    } catch (error) {
      console.error("Error fetching bookmarks:", error);
    }
  };

  const fetchBookDetails = async (googleId) => {
    try {
      const apiKey = import.meta.env.VITE_GOOGLE_API_KEY; // Ensure you have the API key
      const apiUrl = `https://www.googleapis.com/books/v1/volumes/${googleId}?key=${apiKey}`;

      const response = await axios.get(apiUrl);

      // Extract title, authors, and thumbnail from the book details
      const { title, authors, imageLinks } = response.data.volumeInfo;
      const thumbnail = imageLinks?.thumbnail;

      return { title, authors, thumbnail };
    } catch (error) {
      console.error("Error fetching book details:", error);
      return {};
    }
  };

  const handleRemove = async (bookmark) => {
    // console.log(bookmark)
    const googleId = bookmark
    if (googleId) {
      try {
        const token = localStorage.getItem("token");
        console.log(token);

        await axios.get(
          `http://localhost:5000/remove_bookmark/${googleId}`,

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        
        console.log(googleId);
        console.log(`Book ${googleId} bookmarked successfully!`);        
      } catch (error) {
        console.error("Error bookmarking book:", error);
      }
    }
  }

  // ... rest of your component

  return (
    <div className="w-full mb-20">
      <div className="w-11/12 flex flex-col justify-center gap-2 lg:mx-20 md:mx-14 mt-5 lg:py-3">
        <div className="flex justify-between items-center px-14">
          <button>
            <Link to="/">
              <FaAngleDoubleLeft size={32} className="text-blue-900" />
            </Link>
          </button>
          <div className="text-3xl text-blue-900 mb-5 font-semibold text-center mt-5">
            My Bookmark
          </div>
          <button className="invisible">
            <Link to="/">Back</Link>
          </button>
        </div>
        <div className="basis-11/12 flex gap-3  mt-5">
          <div className="grid lg:grid-cols-5 w-full lg:gap-6 gap-2 md:grid-cols-4 max-sm:grid-cols-2 md:gap-3 max-sm:gap-4 max-sm:ml-3 ">
            {bookmarks.map((bookmark) => (
              <div
                key={bookmark.id}
                className="w-52 rounded-lg bg-white shadow-lg py-2 flex flex-col mx-auto px-4 mb-3"
              >
                {bookmark.thumbnail && (
                  <img
                    src={bookmark.thumbnail}
                    alt={`Thumbnail for ${bookmark.title}`}
                    className="mb-2 w-full lg:w-36 h-48"
                  />
                )}

                <div className="h-16 max-sm:h-20">
                  <h2 className="text-sm font-semibold text-blue-900 mb-1 line-clamp-1">
                    {bookmark.title}
                  </h2>
                  <p className="text-xs text-slate-500 mb-2">
                    by {bookmark.authors || "Unknown Author"}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <button onClick={() => handleRemove(bookmark.googleId)}>
                    <FaTrashAlt size={16} className="text-blue-900"/>
                  </button>
                  <Link
                    to={`/detail/${bookmark.googleId}`}
                    className="py-1 px-8 rounded-lg text-white text-center w-fit text-sm bg-blue-900 my-2"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

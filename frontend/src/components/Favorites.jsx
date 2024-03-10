import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaAngleDoubleLeft } from "react-icons/fa";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavoriteBooks();
  }, []);

  const fetchFavoriteBooks = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/show-favorite", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Raw API response:", response.data);

      if (
        !response.data ||
        !response.data.favorites ||
        !Array.isArray(response.data.favorites)
      ) {
        console.error("Invalid API response format:", response.data);
        return;
      }

      setFavorites(response.data.favorites);

      const updatedFavorites = await Promise.all(
        response.data.favorites.map(async (favorite) => {
          try {
            const bookDetails = await fetchBookDetails(favorite.googleId);
            return { ...favorite, ...bookDetails };
          } catch (error) {
            console.error(
              "Error fetching book details for",
              favorite.googleId,
              ":",
              error
            );
            return favorite; // Return the favorite without details to avoid breaking the rendering
          }
        })
      );

      setFavorites(updatedFavorites);
    } catch (error) {
      console.error("Error fetching favorite:", error);
    }
  };

  const fetchBookDetails = async (googleId) => {
    try {
      const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
      const apiUrl = `https://www.googleapis.com/books/v1/volumes/${googleId}?key=${apiKey}`;

      const response = await axios.get(apiUrl);

      const { title, authors, imageLinks } = response.data.volumeInfo;
      const thumbnail = imageLinks?.thumbnail || ""; // Ensure thumbnail is a string

      return { title, authors, thumbnail };
    } catch (error) {
      console.error("Error fetching book details:", error);
      return {};
    }
  };

  return (
    <div className="w-full mb-20">
      <div className="w-11/12 flex flex-col justify-center gap-2 lg:mx-20 md:mx-14 mt-5 lg:py-3">
        <div className="flex justify-between items-center px-14">
          <button>
            <Link to="/"><FaAngleDoubleLeft size={32} className="text-blue-900"/></Link>
          </button>
          <div className="text-3xl text-blue-900 mb-5 font-semibold text-center mt-5">
            Favorite Page
          </div>
          <button className="invisible">
            <Link to="/">Back</Link>
          </button>
        </div>
        <div className="basis-11/12 flex gap-3  mt-5">
          <div className="grid lg:grid-cols-5 w-full lg:gap-6 gap-2 md:grid-cols-4 max-sm:grid-cols-2 md:gap-3 max-sm:gap-4 max-sm:ml-3 ">
            {favorites.map((favorite) => (
              <div
                key={favorite.id}
                className="w-3/10 rounded-lg bg-white shadow-lg py-2 mx-auto px-4 mb-3"
              >
                <div></div>
                {favorite.thumbnail && (
                  <img
                    src={favorite.thumbnail}
                    alt={`Thumbnail for ${favorite.title}`}
                    className="mb-2 w-fit lg:w-36 lg:h-48 md:h-48"
                  />
                )}

                <div className="h-16 max-sm:h-20">
                  <h2 className="text-sm font-semibold text-blue-900 mb-1">
                    {favorite.title}
                  </h2>
                  <p className="text-xs text-slate-500 mb-2">
                    by {favorite.authors || "Unknown Author"}
                  </p>
                </div>

                <div className="flex justify-center">
                  <Link
                    to={`/detail/${favorite.id}`}
                    className="py-1 px-8 rounded-lg text-white text-sm bg-blue-900 my-2"
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

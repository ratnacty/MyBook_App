// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import SubHeader from "../components/SubHeader";
import { fetchBooks } from "../components/api";
import { Link } from "react-router-dom";
import { handleSearchBook } from "../components/api";
import { FaBookmark } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

export default function AllCategory() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("latest");
  const [isBookmarkedModal, setIsBookmarkedModal] = useState(false);
  const [isBookmarkedSuccess, setIsBookmarkedSuccess] = useState(false);
  const [isFavoriteModal, setIsFavoriteModal] = useState(false);
  const [isFavoriteSuccess, setIsFavoriteSuccess] = useState(false);
  const [categories, setCategories] = useState([
    "popular",
    "latest",
    "romance",
    "science",
    "fiction",
    "music",
    "art",
    "random",
    "novel",
    "history",
  ]);
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const titleLengthThreshold = 30;

  useEffect(() => {
    console.log("Selected Category:", selectedCategory);
    fetchBooks(selectedCategory).then((data) => setBooks(data));
  }, [selectedCategory]);
  // const fetchBooks = async () => {
  //   let apiUrl = "";

  //   switch (selectedCategory) {
  //     case "popular":
  //       apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:inauthor:new&key=${apiKey}&orderBy=relevance`;
  //       break;
  //     case "latest":
  //       apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:new&key=${apiKey}&orderBy=newest`;
  //       break;
  //     case "romance":
  //       apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:romance&key=${apiKey}&orderBy=newest`;
  //       break;
  //     case "science":
  //       apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:science+edu&key=${apiKey}&orderBy=newest`;
  //       break;
  //     case "fiction":
  //       apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&key=${apiKey}&orderBy=newest`;
  //       break;
  //     case "music":
  //       apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:music&key=${apiKey}&orderBy=newest`;
  //       break;
  //     case "art":
  //       apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:seni&key=${apiKey}&orderBy=newest`;
  //       break;
  //     case "random":
  //       apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:random&key=${apiKey}&orderBy=newest`;
  //       break;
  //     case "novel":
  //       apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:novel&key=${apiKey}&orderBy=newest`;
  //       break;
  //     case "history":
  //       apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:history&key=${apiKey}&orderBy=newest`;
  //       break;
  //     default:
  //       console.error(`Invalid category: ${selectedCategory}`);
  //       return;
  //   }

  //   try {
  //     const response = await axios.get(apiUrl);
  //     if (response.data.items) {
  //       const filteredBooks = response.data.items.filter(
  //         (book) => book.volumeInfo.title.length <= titleLengthThreshold
  //       );
  //       setBooks(filteredBooks);
  //     } else {
  //       console.error("No items found in the response:", response);
  //     }
  //   } catch (error) {
  //     console.error(`Error fetching ${selectedCategory} books:`, error);
  //   }
  // };

  const fetchRandomBooks = async () => {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=a+love&key=${apiKey}&orderBy=relevance`;

    try {
      const response = await axios.get(apiUrl);
      if (response.data.items) {
        const filteredBooks = response.data.items.filter(
          (book) => book.volumeInfo.title.length <= titleLengthThreshold
        );
        setBooks(filteredBooks);
      } else {
        console.error("No items found in the response:", response);
      }
    } catch (error) {
      console.error("Error fetching random books:", error);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      fetchBooks();
    } else {
      const data = await handleSearchBook(searchTerm, apiKey)
      setBooks(data)
      // const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}&orderBy=relevance`;
      // try {
      //   const response = await axios.get(apiUrl);
      //   if (response.data.items) {
      //     const filteredBooks = response.data.items.filter(
      //       (book) => book.volumeInfo.title.length <= titleLengthThreshold
      //     );
      //     setBooks(filteredBooks);
      //   } else {
      //     console.error("No items found in the response:", response);
      //   }
      // } catch (error) {
      //   console.error("Error fetching books:", error);
      // }
    }
  };

  const handleBookmark = async (book) => {
    const googleId = book.id;
    if (googleId) {
      try {
        const token = localStorage.getItem("token");
        console.log(token);

        await axios.get(
          `http://localhost:5000/bookmark/${googleId}`,

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        
        console.log(googleId);
        console.log(`Book ${googleId} bookmarked successfully!`);
        setIsBookmarkedSuccess(true);
        setIsBookmarkedModal(true);
        
        setTimeout(() => {
          setIsBookmarkedModal(false);
        }, 3000);
      } catch (error) {
        console.error("Error bookmarking book:", error);
        setIsBookmarkedSuccess(false);
        setIsBookmarkedModal(true);

        setTimeout(() => {
          setIsBookmarkedModal(false);
        }, 3000);
      }
    }
  };

  const handleFavorite = async (book) => {
    const googleId = book.id;
    if (googleId) {
      try {
        const token = localStorage.getItem("token");
        console.log(token);

        await axios.get(
          `http://localhost:5000/favorite/${googleId}`,

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(googleId);
        console.log(`Book ${googleId} add to favorite successfully!`);
        setIsFavoriteSuccess(true);
        setIsFavoriteModal(true);
        
        setTimeout(() => {
          setIsFavoriteModal(false);
        }, 3000);
      } catch (error) {
        console.error("Error Favorite book:", error);
        setIsFavoriteSuccess(false);
        setIsFavoriteModal(true);

        setTimeout(() => {
          setIsFavoriteModal(false);
        }, 3000);
      }
    }
  };

  return (
    <div>
      <div className={`fixed right-10 bottom-28 bg-violet-500 rounded-md ${isBookmarkedModal ? "block" : "hidden"}`}>
        <div className="flex justify-between items-center w-[calc(fit-content+2rem)] w- p-4">
          <div className="text-white">{isBookmarkedSuccess ? "Successfully added to bookmark" : "Already addded to bookmark"}</div>
          <button onClick={() => setIsBookmarkedModal(false)}>X</button>
        </div>
      </div>
      <div className={`fixed right-10 bottom-28 bg-violet-500 rounded-md ${isFavoriteModal ? "block" : "hidden"}`}>
        <div className="flex justify-between items-center w-[calc(fit-content+2rem)] w- p-4">
          <div className="text-white">{isFavoriteSuccess ? "Successfully added to favorite" : "Already added to favorite"}</div>
          <button onClick={() => setIsFavoriteModal(false)}>X</button>
        </div>
      </div>
      <div className="w-full mb-20">
        <SubHeader
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onSearch={handleSearch}
        />

        <div className="w-11/12 flex flex-col justify-center gap-2 lg:mx-20 md:mx-14 mt-5 lg:py-3">
          <div className="basis-11/12 flex gap-3">
            <div className="">
              <label htmlFor="category" className="mx-3">
                Select a category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="border-2 border-solid border-violet-500 w-32 outline-none h-8"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={fetchRandomBooks}
              className="px-2  bg-violet-500 text-white rounded-lg"
            >
              Random
            </button>
          </div>

          <div className="basis-11/12 mt-8">
            <div className="grid lg:grid-cols-5 w-full lg:gap-6 gap-2 md:grid-cols-4 max-sm:grid-cols-2 md:gap-3 max-sm:gap-4 max-sm:ml-3 ">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="w-3/10 px-5 rounded-lg bg-white shadow-lg py-2 lg:px-7 mb-3"
                >
                  <div>
                    <button
                      onClick={() => handleBookmark(book)}
                      className="py-1 px-2 rounded-lg text-white text-sm bg-violet-500 my-2"
                    >
                      <FaBookmark size={16}/>
                    </button>
                    <button
                      onClick={() => handleFavorite(book)}
                      className="py-1 px-2 rounded-lg text-white text-sm bg-violet-500 my-2"
                    >
                      <MdFavorite size={16}/>
                    </button>
                  </div>
                  <img
                    src={
                      book.volumeInfo.imageLinks?.thumbnail ||
                      "https://via.placeholder.com/150"
                    }
                    alt={book.volumeInfo.title}
                    className="mb-2 w-fit lg:w-36 lg:h-48 md:h-48"
                  />

                  <div className="h-16 max-sm:h-20">
                    <h2 className="text-sm font-semibold text-blue-900 mb-1">
                      {book.volumeInfo.title}
                    </h2>
                    <p className="text-xs text-slate-500 mb-2">
                      by {book.volumeInfo.authors || "Unknown Author"}
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <Link
                      to={`/detail/${book.id}`}
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

      <Footer />
    </div>
  );
}

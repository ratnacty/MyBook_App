// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import { fetchBooks } from "../components/api";
import { handleSearchBook } from "../components/api";

export default function Collection() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const titleLengthThreshold = 30;

  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

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


  useEffect(() => {
    // Fetch recommended books
    fetchBooks("latest").then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <div className="w-full mb-20">
        <SubHeader
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onSearch={handleSearch}
        />

        <div className="lg:w-8/12 md:10/12 md:mx-10 md:px-1 md:py-2 max-sm:3/4 mb-3 mt-5 lg:px-14 py-5 bg-white shadow-xl lg:mx-auto rounded-lg ">
          {books.map((book) => (
            <div key={book.id} className="flex px-8 py-5 gap-4">
              <img
                src={
                  book.volumeInfo.imageLinks?.thumbnail ||
                  "https://via.placeholder.com/150"
                }
                alt={book.volumeInfo.title}
                className="w-fit h-60 py-3 pl-3"
              />
              <div className="w-full block my-5 px-5 ">
                <p className="text-violet-800 text-2xl  font-serif font-semibold">
                  {book.volumeInfo.title}
                </p>
                <p className="text-blue-900 text-md font-serif font-semibold mb-5">
                  {book.volumeInfo.authors}
                </p>

                <Link
                  to={`/detail/${book.id}`}
                  className="bg-blue-900 text-white px-3 py-1 mt-10 rounded-lg"
                >
                  View more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

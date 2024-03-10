import axios from "axios";
import Cookies from "js-cookie";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY; // Replace with your actual API key
const titleLengthThreshold = 35;

let token = Cookies.get("token");
console.log(token);

export const fetchBooks = async (category) => {
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${category}&key=${apiKey}&orderBy=relevance`;

  try {
    const response = await axios.get(apiUrl);
    if (response.data.items) {
      const filteredBooks = response.data.items.filter(
        (book) => book.volumeInfo.title.length <= titleLengthThreshold
      );
      return filteredBooks;
    } else {
      console.error("No items found in the response:", response);
      return [];
    }
  } catch (error) {
    console.error(`Error fetching ${category} books:`, error);
    return [];
  }
};

export const fetchBookDetails = async (bookId) => {
  const apiUrl = `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    if (response.data) {
      return response.data;
    } else {
      console.error("No details found for the book:", bookId);
      return null;
    }
  } catch (error) {
    console.error("Error fetching book details:", error);
    return null;
  }
};

export const bookmarkBook = async (googleId) => {
  try {
    const response = await axios.get(
      "http://localhost:5000/bookmark",
      {
        googleId: googleId,
      },
      {
        headers: {
          Authorization: token,
          "content-type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error bookmarking book:", error);
    throw error; // Rethrow the error to handle it in the calling component
  }
};

export const handleSearchBook = async (searchTerm, apiKey) => {
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}&orderBy=relevance`;
  try {
    const response = await axios.get(apiUrl);
    if (response.data.items) {
      const filteredBooks = response.data.items.filter(
        (book) => book.volumeInfo.title.length <= titleLengthThreshold
      );
      return filteredBooks;
    } else {
      console.error("No items found in the response:", response);
    }
  } catch (error) {
    console.error("Error fetching books:", error);
  }
}

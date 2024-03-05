import axios from "axios";

const apiKey = "AIzaSyAyJrfybNPsCjfjN0qA8QRW4qdKKb610-Q"; // Replace with your actual API key

export const fetchBooks = async (category) => {
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${category}&key=${apiKey}&orderBy=relevance`;

  try {
    const response = await axios.get(apiUrl);
    if (response.data.items) {
      return response.data.items;
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

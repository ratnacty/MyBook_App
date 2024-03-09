import React, { useState, useEffect } from "react";
import axios from "axios";

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

  // ... rest of your component

  return (
    <div>
      {/* Display bookmarked books */}
      {bookmarks.map((bookmark) => (
        <div key={bookmark.id}>
          {/* Display bookmarked book details */}
          <h3>{bookmark.title}</h3>
          <p>
            {bookmark.authors
              ? `Author(s): ${bookmark.authors.join(", ")}`
              : "Author unknown"}
          </p>
          {bookmark.thumbnail && (
            <img
              src={bookmark.thumbnail}
              alt={`Thumbnail for ${bookmark.title}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

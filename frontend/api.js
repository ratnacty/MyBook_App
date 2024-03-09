// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [bookmarks, setBookmarks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const apiKey = 'YOUR_GOOGLE_BOOKS_API_KEY';

  useEffect(() => {
    // Construct the API URL based on search term and category
    let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`;

    // Adjust API URL based on the selected category
    if (category === 'popular') {
      apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=subject:popular&key=' + apiKey;
    } else if (category === 'latest') {
      // You might need to adjust this based on your definition of "latest"
      apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=inauthor:new&key=' + apiKey;
    }

    // Fetch books from Google Books API and set the state
    axios.get(apiUrl)
      .then(response => setBooks(response.data.items))
      .catch(error => console.error('Error fetching books:', error));
  }, [searchTerm, category, apiKey]);

  // Function to toggle a book's bookmark status
  const toggleBookmark = (bookId) => {
    const updatedBookmarks = bookmarks.includes(bookId)
      ? bookmarks.filter(id => id !== bookId)
      : [...bookmarks, bookId];

    setBookmarks(updatedBookmarks);
  };

  // Function to toggle a book's favorite status
  const toggleFavorite = (bookId) => {
    const updatedFavorites = favorites.includes(bookId)
      ? favorites.filter(id => id !== bookId)
      : [...favorites, bookId];

    setFavorites(updatedFavorites);
  };

  return (
    <div className="App">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl">Book Reading Website</h1>
      </header>
      
      <main className="p-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name, category, title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 mb-4"
        />

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 mb-4"
        >
          <option value="">All Categories</option>
          <option value="popular">Popular</option>
          <option value="latest">Latest</option>
          {/* Add more categories based on your needs */}
        </select>

        {/* Book Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books.map(book => (
            <div key={book.id} className="border p-4">
              <h2 className="text-lg font-bold mb-2">{book.volumeInfo.title}</h2>
              <button onClick={() => toggleBookmark(book.id)}>
                {bookmarks.includes(book.id) ? 'Remove Bookmark' : 'Add Bookmark'}
              </button>
              <button onClick={() => toggleFavorite(book.id)}>
                {favorites.includes(book.id) ? 'Remove Favorite' : 'Add Favorite'}
              </button>
              {/* Add more details based on your needs */}
            </div>
          ))}
        </div>

        {/* Bookmarks Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Bookmarks</h2>
          <ul>
            {books
              .filter(book => bookmarks.includes(book.id))
              .map(book => (
                <li key={book.id}>{book.volumeInfo.title}</li>
              ))}
          </ul>
        </div>

        {/* Favorites Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Favorites</h2>
          <ul>
            {books
              .filter(book => favorites.includes(book.id))
              .map(book => (
                <li key={book.id}>{book.volumeInfo.title}</li>
              ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;

// eslint-disable-next-line no-unused-vars
import React from "react"
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCategory from "./pages/AllCategory.jsx";
import Home from "./pages/Home.jsx";
import Collection from "./pages/Collection.jsx";

function App() {
  
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-category" element={<AllCategory />} />
            <Route path="/collection" element={<Collection />} />

        </Routes>
    </BrowserRouter>

    </>
  )
}

export default App

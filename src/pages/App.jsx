import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Categories from "./Categories.jsx";
import Learn from "./Learn.jsx";
// если Review будет нужен:
import Review from "./Review.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/learn/:category" element={<Learn />} />
        <Route path="/review" element={<Review />} /> {/* если хочешь */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

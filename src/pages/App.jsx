import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Categories from "./Categories.jsx";
import Learn from "./Learn.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/learn/:category" element={<Learn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import About from "./page/About";
import Gallery from "./page/Gallery";
import ArticleList from "./page/ArticleList";
import Tour from "./page/Tour";
import ThreeBackground from "./components/3D/ThreeBackground";
import Shop from "./page/Shop";
import OpenTrip from "./page/OpenTrip";


function App() {
  return (
    <Router>
      <ThreeBackground />
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/article" element={<ArticleList />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/Articlelist" element={<ArticleList />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Opentrip" element={<OpenTrip />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/layouts/header";
import Footer from "./pages/layouts/footer";
import Home from "./pages/home";
import About from "./pages/about";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="" element={<Home />} />
        
       
      </Routes>

      <Footer />
    </>
  );
}

export default App;

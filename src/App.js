import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./pages/layouts/header";
import Footer from "./pages/layouts/footer";
import Home from "./pages/home";
import Error from "./pages/error";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const location = useLocation();

 
  const isErrorPage = location.pathname !== "/";

  return (
    <>
     
      {isErrorPage ? null : <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;

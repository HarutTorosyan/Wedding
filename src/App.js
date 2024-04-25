import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
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
    <I18nextProvider i18n={i18n}>
      <>
        {isErrorPage ? null : <Header />}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        
        <Footer />
      </>
    </I18nextProvider>
  );
}

export default App;
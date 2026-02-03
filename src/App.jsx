import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/loyouts/Navbar";
import Footer from "./components/loyouts/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MeetKodmem from "./components/MeetKodmem";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/meet-kodmem" element={<MeetKodmem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

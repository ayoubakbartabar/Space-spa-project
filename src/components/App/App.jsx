import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Destination from "../Destination/Destination";
import Crew from "../Crew/Crew";
import Technology from "../Technology/Technology";
import NotFound from "../NotFound/NotFound";
import "./App.css";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Object for setting background URLs based on path
    const backgrounds = {
      "/": "url('/assets/image/home/background-home-desktop.jpg')",
      "/destination": "url('/assets/image/destination/background-destination-desktop.jpg')",
      "/crew": "url('/assets/image/crew/background-crew-desktop.jpg')",
      "/technology": "url('/assets/image/technology/background-technology-desktop.jpg')",
    };

    // Set background to the document root
    document.documentElement.style.setProperty(
      "--background-image",
      backgrounds[location.pathname] || backgrounds["/"]
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

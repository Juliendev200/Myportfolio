import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Apropos from "./routes/Apropos";
import SitePage from "./routes/SitePage";

export default function App() {
  const basename = import.meta.env.MODE === "production" ? "/Myportfolio" : "";
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index path="/Home" element={<Home />} />
        <Route path="/website/:id" element={<SitePage />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
    </BrowserRouter>
  );
}

import React from "react";
import "./App.css";
import { Footer } from "./Components/Footer";
import { NavBar } from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Collections } from "./Components/Collections";
import { Men } from "./Components/Men";
import { Women } from "./Components/Women";
import { Contact } from "./Components/Contact"
import { About } from "./Components/About"

export default function App() {
  return (
    <body>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Collections />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/abouts" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </body>
  );
}

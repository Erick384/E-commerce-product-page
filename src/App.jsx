import React from "react";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Collection } from "./Components/Collection";
import { Men } from "./Components/Men";
import { Women } from "./Components/Women";
import { About } from "./Components/About"
import { Contact } from "./Components/Contact"
import { Footer } from "./Components/Footer";
import { Cart } from "./Components/Cart/Cart";

export default function App() {
  return (
    <body>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Collection />} />
          <Route path="/cart" element={<Cart/>} />
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

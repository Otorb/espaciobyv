"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full top-0 left-0 z-50">
      {/* Banner superior */}
      {!isScrolled && (
        <div className="w-full bg-gray-200 h-32 flex items-center justify-center">
          <img
            src="/images.png"
            alt="Publicidad"
            className="h-full object-cover"
          />
        </div>
      )}

      {/* Franja amarilla (Navbar) */}
      <div
        className={`w-full bg-yellow-400 py-3 transition-all duration-300 sticky top-0 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="relative container mx-auto flex justify-center items-center px-4 py-2">
          <h1 className="text-2xl font-bold text-black">Xponencial ByV</h1>
          {/* <button className="absolute right-4 bg-blue-900 text-white px-4 py-2 rounded">
            SUSCRÍBETE
          </button> */}
        </div>
      </div>

      {/* Navbar inferior o menú */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-2 flex justify-center space-x-4 text-sm font-medium">
          <a href="#" className="hover:text-yellow-600">
            LO ÚLTIMO
          </a>
          <a href="#" className="hover:text-yellow-600">
            POLÍTICA
          </a>
          <a href="#" className="hover:text-yellow-600">
            ECONOMÍA
          </a>
          <a href="#" className="hover:text-yellow-600">
            MUNDO
          </a>
          <a href="#" className="hover:text-yellow-600">
            DEPORTE
          </a>
        </div>
      </nav>
    </header>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-primary w-full h-8 text-white shadow-md sticky top-0 z-50" >
      <nav className="max-w-screen-xl mx-auto px-6 py-2 flex items-center justify-between relative">
        {/* Logo centrado en mobile, alineado a la izquierda en sm+ */}
        <div className="pl-2 mt-2  absolute left-1/2 transform -translate-x-1/2 sm:static sm:translate-x-0 sm:left-0 flex items-center justify-center">
          <Link href="/">
         {/* <img
  src="/fondo.png"
  alt="Your Company"
  className="h-10 w-auto object-contain scale-150 drop-shadow-lg"
/> */}
          </Link>
        </div>

        {/* Botón Hamburguesa para móviles */}
        <button
          className="md:hidden focus:outline-none z-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menú de escritorio */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#servicios"
              className="hover:text-blue-400 transition-colors duration-200"
            >
           Blog
            </a>
          </li>
          <li>
            <a
              href="#nosotros"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Galeria
            </a>
          </li>
           
          <li>
            <a
              href="#contacto"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-primary px-4 pb-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#servicios"
                onClick={handleLinkClick}
                className="hover:text-blue-400 transition-colors duration-200"
              >
               Blog
              </a>
            </li>
            <li>
              <a
                href="#nosotros"
                onClick={handleLinkClick}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Galeria
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                onClick={handleLinkClick}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;

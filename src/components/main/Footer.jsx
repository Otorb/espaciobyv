import React from "react";

function Footer() {
  return (
    <footer className=".bg-primary w-full text-white py-6 text-center">
      <p>
        &copy; {new Date().getFullYear()} Espacio ByV. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}

export default Footer;

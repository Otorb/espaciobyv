"use client";
import About from "@/components/main/About";
import Principal from "@/components/main/Principal";
import Navbar from "@/components/Navbar";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Talleres from "@/components/main/Talleres";
import Contact from "@/components/main/Contacto";
import Footer from "@/components/main/Footer";

function page() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });

    const handleScroll = () => {
      AOS.refresh(); // 👈 Refresca AOS cada vez que scrolleás
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar />
      <Principal />
      <About />
      <Talleres />
      <Contact />
      <Footer />
    </>
  );
}

export default page;

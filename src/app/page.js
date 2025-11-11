"use client";
import { useEffect } from "react";
import AdGrid from "@/components/AdGrid";
import Header from "@/components/Header";
import NewsSection from "@/components/NewsSection";
import Sponsors from "@/components/Sponsor";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";
import Principal from "@/components/main/Principal";
import About from "@/components/main/About";
import Talleres from "@/components/main/Talleres";
import Contact from "@/components/main/Contacto";
import Footer from "@/components/main/Footer";


export default async function Home() {
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

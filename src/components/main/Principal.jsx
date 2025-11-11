"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./AutoCarousel.module.css";
const images = [
  { src: "/8.webp", text: "AMOR POR LA COCINA" },
  { src: "/9.jpg", text: "DISFRUTA LA EXPERIENCIA" },
  { src: "/10.jpg", text: "DESCUBRE NUESTRO ASESORAMIENTO" },
];

function Principal() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carouselInner}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((item, index) => (
          <div key={index} className={styles.carouselItem}>
            <Image
              src={item.src}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
            />
            <div className={styles.textOverlay}>
              <h2>{item.text}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Principal;

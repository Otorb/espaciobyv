"use client";
import Image from "next/image";
import Link from "next/link";

const ads = [
  {
    id: 1,
    image: "/1.webp",
    link: "https://marca1.com",
    alt: "Anuncio 1",
  },
  {
    id: 2,
    image: "/2.webp",
    link: "https://marca2.com",
    alt: "Anuncio 2",
  },
  {
    id: 3,
    image: "/3.png",
    link: "https://marca3.com",
    alt: "Anuncio 3",
  },
];

export default function AdGrid() {
  return (
    <section className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {ads.map((ad) => (
        <Link
          key={ad.id}
          href={ad.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full h-40 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
        >
          <Image
            src={ad.image}
            alt={ad.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </Link>
      ))}
    </section>
  );
}

"use client";
import Image from "next/image";

const sponsors = [
  { id: 1, src: "/1.webp", alt: "Google", name: "Google" },
  { id: 2, src: "/2.webp", alt: "Amazon", name: "Amazon" },
  { id: 3, src: "/3.png", alt: "Microsoft", name: "Microsoft" },
  { id: 4, src: "/4.png", alt: "Meta", name: "Meta" },
  { id: 5, src: "/5.jpg", alt: "Netflix", name: "Netflix" },
];

export default function Sponsors() {
  return (
    <section className="relative overflow-hidden py-12 bg-gray-50">
      {/* Título */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
        Empresas que confían en nosotros
      </h2>

      {/* Gradientes laterales */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

      {/* Carrusel */}
      <div className="flex animate-marquee whitespace-nowrap">
        {sponsors.concat(sponsors).map((sponsor) => (
          <div
  key={sponsor.id + Math.random()}
  className="mx-8 flex-shrink-0 flex flex-col items-center"
>
  <Image
    src={sponsor.src}
    alt={sponsor.alt}
    width={128}
    height={68}
    className="h-12 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition"
  />
  <span className="text-gray-800 mt-2 text-center">
    {sponsor.name}
  </span>
</div>
        ))}
      </div>
    </section>
  );
}

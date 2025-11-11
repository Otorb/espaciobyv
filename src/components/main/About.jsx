"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../../public/11.jpeg";
import img2 from "../../../public/12.jpg";

function About() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-8 py-12 px-6 lg:px-24">
      {/* Texto */}
      <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Espacio Boca de Vino
        </h2>
        <p className="text-gray-600 mb-4">
          Nuestro Espacio Boca de Vino comenzó en 2018 con una trayectoria
          profesional de más de 10 años ofreciendo servicios de cocina tradicional española.

        </p>
        <br />
        
       
        

        <div class="flex flex-col items-center text-center md:items-start md:text-left px-4 sm:px-6 md:px-8 lg:px-12">
          <h2 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Servicios y asesoramiento de:
          </h2>

          <ul class="max-w-md space-y-4 text-gray-500 list-inside dark:text-gray-400">
            <li class="flex items-start">
              <svg
                class="w-4 h-4 me-2 mt-1 text-green-500 dark:text-green-400 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Croquetas
            </li>

            <li class="flex items-start">
              <svg
                class="w-4 h-4 me-2 mt-1 text-green-500 dark:text-green-400 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Arroces
            </li>

            <li class="flex items-start">
              <svg
                class="w-4 h-4 me-2 mt-1 text-green-500 dark:text-green-400 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Guisos
            </li>

            <li class="flex items-start">
              <svg
                class="w-4 h-4 me-2 mt-1 text-green-500 dark:text-green-400 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Panes de "Masa Madre"
            </li>

            <li class="flex items-start">
              <svg
                class="w-4 h-4 me-2 mt-1 text-green-500 dark:text-green-400 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Cocina tradicional Española
            </li>
          </ul>
        </div>
      </div>

      {/* Imágenes - Desktop */}
      <div
        className="hidden lg:flex lg:w-1/2 flex-row gap-2.5"
        data-aos="fade-down"
      >
        <div className="w-1/2 relative -translate-y-7">
          <Image
            src={img1}
            alt="Team working together"
            width={300}
            height={400}
            className="rounded-xl object-cover w-full h-auto"
            priority
          />
        </div>
        <div className="w-1/2 flex items-end">
          <Image
            src={img2}
            alt="Team office setup"
            width={300}
            height={350}
            className="rounded-xl object-cover w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Imágenes - Mobile */}
      <div className="block lg:hidden w-full mt-6">
        <Image
          src={img1}
          alt="Team working together"
          width={600}
          height={400}
          className="rounded-xl object-cover w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}

export default About;

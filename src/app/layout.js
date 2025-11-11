import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Tipografías personalizadas
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadatos para SEO
export const metadata = {
  title: "Espacio ByV | Asesoramiento Gastronómico y Talleres de Cocina en España",
  description:
    "Espacio ByV ofrece asesoramiento gastronómico, formación culinaria, talleres de cocina y consultoría para restaurantes en toda España. Impulsa tu negocio gastronómico con expertos en cocina y gestión de restaurantes.",
  keywords: [
    "asesoramiento gastronómico",
    "consultoría para restaurantes",
    "talleres de cocina",
    "cursos de cocina",
    "formación gastronómica",
    "consultor gastronómico España",
    "gestión de restaurantes",
    "Espacio ByV",
    "cocina profesional",
    "escuela de cocina",
  ],
  metadataBase: new URL("https://www.espaciobyv.com"), // Cambia al dominio real de tu empresa
  openGraph: {
    title: "Espacio ByV | Consultoría y Talleres Gastronómicos en España",
    description:
      "En Espacio ByV te ayudamos a hacer crecer tu negocio gastronómico. Asesoramiento, cursos y talleres de cocina impartidos por expertos en restauración y cocina profesional.",
    url: "https://www.espaciobyv.com",
    siteName: "Espacio ByV",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Imagen destacada para redes sociales
        width: 1200,
        height: 630,
        alt: "Taller de cocina y asesoramiento gastronómico en Espacio ByV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Espacio ByV | Asesoramiento y Talleres Gastronómicos",
    description:
      "Asesoramiento gastronómico, talleres de cocina y formación para restaurantes en España. Descubre todo lo que Espacio ByV puede hacer por tu negocio.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://www.espaciobyv.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-black dark:text-white`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}

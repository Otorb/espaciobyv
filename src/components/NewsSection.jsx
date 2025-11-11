"use client";
import Image from "next/image";
import Link from "next/link";

export default function NewsSection({ news }) {
  if (!news || news.length === 0) return <p>No hay noticias disponibles.</p>;

  // Primera noticia destacada
  const mainArticle = news[3];
  // Siguientes noticias secundarias
  const secondary = news.slice(3, 8);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto py-10 px-4">
      {/* Noticia principal */}
      <div className="lg:col-span-2 space-y-4">
        <Link href={mainArticle.link} target="_blank" rel="noopener noreferrer">
          <div className="relative w-full h-80 overflow-hidden rounded-lg">
            <Image
              src={mainArticle.image_url}
              alt={mainArticle.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Link>
        <h2 className="text-3xl font-bold hover:text-yellow-600 transition-colors">
          {mainArticle.title}
        </h2>
        <p className="text-gray-600 text-sm">{mainArticle.description}</p>
        <p className="text-xs text-gray-400">
          {new Date(mainArticle.pubDate).toLocaleDateString()} •{" "}
          {mainArticle.source_name}
        </p>
      </div>

      {/* Noticias secundarias */}
      <div className="space-y-6">
        {secondary.map((article) => (
          <Link
            key={article.article_id}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 group"
          >
            <div className="relative w-28 h-24 flex-shrink-0">
              <Image
                src={article.image_url}
                alt={article.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="text-sm font-semibold group-hover:text-yellow-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-xs text-gray-500">{article.source_name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

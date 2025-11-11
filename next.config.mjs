/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "estaticos-cdn.prensaiberica.es",
      },
      {
        protocol: "https",
        hostname: "castellondiario.com",
      },
      {
        protocol: "https",
        hostname: "img.europapress.es",
      },
      {
        protocol: "https",
        hostname: "s3.abcstatics.com",
      },
    ],
  },
};

export default nextConfig;

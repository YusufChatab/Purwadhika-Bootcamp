/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
  env: {
    CONTENTFUL_SPACE_ID: "mc67a6c6ahlt",
    CONTENTFUL_ACCESS_TOKEN: "gNNnerANUYYcE8cVCeDkuYjdT0hdN_ITcgkHs5S42ig",
  },
};

export default nextConfig;

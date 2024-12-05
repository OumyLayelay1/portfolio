/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolio-olk.netlify.app', // Ajoutez uniquement si vous chargez une image distante
      },
    ],
  },
};

export default nextConfig;

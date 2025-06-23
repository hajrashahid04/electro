/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ⭐️ Yeh line zaruri hai static site banane ke liye

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig;

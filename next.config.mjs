/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/research",
        destination: "/research/state-of-wolof-voice-ai-2026.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

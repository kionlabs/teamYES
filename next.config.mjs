/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/language',
        destination: '/language-programs',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

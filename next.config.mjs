/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_CUSTOM_BASE_PATH || '',
  // Uncomment when we need to build locally
  // output: 'export',
  // images: {
  //   unoptimized: true,
  // }
};

export default nextConfig;

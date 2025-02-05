/** @type {import('next').NextConfig} */
const isLocalBuild = process.env.NEXT_LOCAL_BUILD === 'true';
const nextConfig = {
  basePath: process.env.NEXT_CUSTOM_BASE_PATH || '',
  // With local build, we want to generate a static site
  output: isLocalBuild ? 'export' : undefined,
  images: isLocalBuild ? {
    unoptimized: true,
  } : undefined,
};

export default nextConfig;

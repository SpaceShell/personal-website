/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.w3.org',
          },
          {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
          },
          {
            protocol: 'https',
            hostname: 's3.dualstack.us-east-2.amazonaws.com',
          },
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
          },
        ],
      },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'tailus.io',
            pathname: '/sources/blocks/stats-cards/preview/images/second_user.webp',
          },
          {
            protocol: 'https',
            hostname: 'tailus.io',
            pathname: '/sources/blocks/stats-cards/preview/images/second_user.webp',
          },
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
          },
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com'
          }
        ],
      },
}

module.exports = nextConfig

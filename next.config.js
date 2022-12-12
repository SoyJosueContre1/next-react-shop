/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.lorem.space', 'm.media-amazon.com', 'placeimg.com'],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  include: ['production'],
  register: true,
});

module.exports = withPWA(nextConfig);

// const runtimeCaching = require('next-pwa/cache');
// const withPWA = require('next-pwa')({
//     dest: 'public',
//     register: true,
//     mode: 'production',
//     disable: true,
//     runtimeCaching,
//     buildExcludes: [/middleware-manifest\.json$/],
// });

// module.exports = withPWA({
//   ...withPWA,
//   reactStrictMode: true,
//   images: {
//     domains: ['api.lorem.space', 'm.media-amazon.com', 'placeimg.com'],
//   },
// });

// const withPWA = require('next-pwa');
// const runtimeCaching = require('next-pwa/cache');

// module.exports = withPWA({
//   pwa: {
//     dest: 'public',
//     register: true,
//     mode: 'production',
//     disable: true,
//     runtimeCaching,
//     buildExcludes: [/middleware-manifest\.json/],
//   },
//   reactStrictMode: true,
//   images: {
//     domains: ['api.lorem.space', 'm.media-amazon.com', 'placeimg.com'],
//   },
// });

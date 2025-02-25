// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   env: {
//     APP_ENV: process.env.APP_ENV,
//     APP_URL: process.env.APP_URL,
//     APP_DOMAIN: process.env.APP_DOMAIN,
//     SERVER_URL: process.env.SERVER_URL,
//     STAFF_KEY: process.env.STAFF_KEY,
//   },
//   async rewrites() {
//     return [
//       {
//         source: '/uploads/:path*',
//         destination: `${process.env.SERVER_URL}/uploads/:path*`,
//       }
//     ]
//   },
//   images: {
//     domains: ['localhost'],
//   },
// };
//
// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
    APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    APP_DOMAIN: process.env.NEXT_PUBLIC_APP_DOMAIN,
    SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
    STAFF_KEY: process.env.NEXT_PUBLIC_STAFF_KEY,
  },
  async rewrites() {
    if (!process.env.NEXT_PUBLIC_SERVER_URL) {
      console.warn('⚠️ WARNING: SERVER_URL is not defined! Skipping rewrites.');
      return [];
    }

    return [
      {
        source: '/uploads/:path*',
        destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/uploads/:path*`,
      },
    ];
  },
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;

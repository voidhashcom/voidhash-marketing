// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import path from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // biome-ignore lint/suspicious/useAwait: async is required
  rewrites: async () => {
    return [
      {
        source: '/docs',
        has: [
          {
            type: 'host',
            value: 'voidhash.com',
          },
        ],
        destination: 'https://docs.voidhash.com/docs/',
      },
      {
        source: '/docs/:path*',
        has: [
          {
            type: 'host',
            value: 'voidhash.com',
          },
        ],
        destination: 'https://docs.voidhash.com/docs/:path*',
      },
    ];
  },
};

if (process.env.NODE_ENV === 'development') {
  nextConfig.outputFileTracingRoot = path.join(__dirname, '../../');
}

export default nextConfig;

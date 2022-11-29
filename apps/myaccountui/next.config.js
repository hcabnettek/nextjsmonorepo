//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { hostname } = require('os');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.socalgas.com',
        pathname: '/sites/default/files/**',
      },
      {
        protocol: 'https',
        hostname: 'myaccount.socalgas.com',
        pathname: '/public/images/**',
      },
    ],
  },
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = withNx(nextConfig);

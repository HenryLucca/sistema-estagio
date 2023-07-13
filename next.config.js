/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   webpack5: true,
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback.fs = false
//       config.resolve.fallback.net = require.resolve('net')
//       config.resolve.fallback.tls = false
//       config.resolve.fallback.dns = false
//       config.resolve.fallback.dgram = false
//       config.resolve.fallback.child_process = false
//     }
//     return config
//   }
// }

// module.exports = nextConfig

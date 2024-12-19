/** @type {import('next').NextConfig} */
const optimizedImages = require('next-optimized-images')
const withPlugins = require('next-compose-plugins')

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  // images:{
  //   loader:'custom',
  //   path: 'https:/storage.googleapis.com/',
  //   domains:['storage.googleapis.com'],
  // },
  images: {
    disableStaticImages: true,
  },
  env: {
    mapsKey: 'AIzaSyBJw20zh-n_rJxtQylSOYgLp935J7lJ8AM',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
}

const config = withPlugins([
  [
    optimizedImages,
    {
      optimizeImages: false,
    }
  ]
],
  nextConfig
)
module.exports = config
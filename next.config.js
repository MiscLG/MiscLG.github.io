/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images:{
    loader:'custom',
    path: 'https:/storage.googleapis.com/',
    domains:['storage.googleapis.com'],
  },
  env:{
    mapsKey:'AIzaSyBJw20zh-n_rJxtQylSOYgLp935J7lJ8AM',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
}

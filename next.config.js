/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images:{
    loader:'custom',
    path: 'https:/storage.googleapis.com/',
    domains:['storage.googleapis.com'],
  },
}

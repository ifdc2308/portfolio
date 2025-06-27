/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '/portfolio',        // nome do seu repositório
  // assetPrefix: '/portfolio',     // necessário para arquivos estáticos
  images: {
    unoptimized: true                // necessário para next/image no export
  },
}

module.exports = nextConfig

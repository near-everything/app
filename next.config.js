const withTM = require('next-transpile-modules')([
  '@ionic/react',
  '@ionic/core',
  '@stencil/core',
  'ionicons',
]);

module.exports = withTM({
  basePath: '',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  swcMinify: true,
});

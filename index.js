module.exports = {
  plugins: ['lodash'],
  env: {
    browser: {
      presets: [
        [
          'env',
          {
            targets: {
              browsers: 'last 2 versions'
            }
          }
        ]
      ]
    },
    node: {
      presets: [
        [
          'env',
          {
            targets: {
              node: 'current'
            }
          }
        ]
      ]
    }
  }
};

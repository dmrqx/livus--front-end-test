module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: async (config) => ({
    ...config,
    module: {
      ...config.module,
      rules: []
    },
    resolve: {
      fallback: {
        crypto: false,
        path: false
      }
    },
  })
}

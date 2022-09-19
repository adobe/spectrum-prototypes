const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/html",
  webpackFinal: async (config, { configType }) => {
    const rules = config.module.rules;
    const fileLoaderRule = rules.find((rule) => rule.test.test(".svg"));
    fileLoaderRule.exclude = /\.svg$/;

    rules.push({
      test: /\.svg$/,
      use: 'svg-inline-loader',
    });

    return config;
  },
};

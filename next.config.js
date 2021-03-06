module.exports = {
  experimental: {
    concurrentFeatures: true,
    serverComponents: true
  },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      return config;
    }
  };
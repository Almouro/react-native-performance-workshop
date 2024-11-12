const ReactCompilerConfig = {
  target: "18", // '17' | '18' | '19'
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
  };
};

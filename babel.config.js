module.exports = function (api) {
  api.cache(true);

  const presets = [['@babel/env', { targets: { node: 'current' } }]];

  return {
    presets,
  };
};

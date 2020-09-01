module.exports = function (api) {
  const inProd = api.env("production");
  api.cache(() => process.env.NODE_ENV);

  return {
    presets: ["next/babel"],
    plugins: [
      [
        "babel-plugin-styled-components",
        {
          ssr: true,
          displayName: !inProd,
          fileName: !inProd
        }
      ],
      inProd && [
        "transform-react-remove-prop-types",
        {
          mode: "remove",
          removeImport: true
        }
      ]
    ].filter(Boolean)
  };
};

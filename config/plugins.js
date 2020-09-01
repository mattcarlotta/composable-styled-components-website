const { DefinePlugin } = require("webpack");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const WebpackBar = require("webpackbar");
const address = require("address");

const { LOCALHOST, NODE_ENV, PORT } = process.env;
const REMOTEADDRESS = address.ip();
const inDev = NODE_ENV === "development";

module.exports = isServer => {
  const plugins = [];

  if (!isServer) {
    plugins.push(
      /* envs for client */
      new DefinePlugin({
        "process.env": {
          LOCALHOST: JSON.stringify(LOCALHOST),
          NODE_ENV: JSON.stringify(NODE_ENV)
        }
      })
    );
  } else {
    plugins.push(
      /* shows a compilation bar instead of the default compile message */
      new WebpackBar({
        color: "#268bd2",
        minimal: false,
        compiledIn: false
      }),
      /* in console error */
      inDev &&
        new FriendlyErrorsWebpackPlugin({
          compilationSuccessInfo: {
            messages: [
              `Local development build: \x1b[1m${LOCALHOST}\x1b[0m`,
              REMOTEADDRESS &&
                `Remote development build: \x1b[1mhttp://${REMOTEADDRESS}:${PORT}\x1b[0m`
            ].filter(Boolean),
            notes: [
              "Note that the development build is not optimized.",
              "To create a production build, use \x1b[1m\x1b[32myarn build\x1b[0m.\n"
            ]
          },
          clearConsole: false
        })
    );
  }

  return plugins.filter(Boolean);
};

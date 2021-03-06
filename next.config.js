const openBrowser = require("react-dev-utils/openBrowser");
const plugins = require("./config/plugins");

const { NODE_ENV, LOCALHOST } = process.env;

/* opens a browser window */
if (NODE_ENV === "development") openBrowser(`${LOCALHOST}`);

module.exports = {
  exportPathMap: () => ({
    "/": { page: "/" },
    "/documentation": { page: "/documentation" },
    "/demonstrations": { page: "/demonstrations" },
    "/releases": { page: "/releases" }
  }),
  webpack(config, { isServer }) {
    /* adds custom plugins to client and server */
    config.plugins.push(...plugins(isServer));

    /* return new config to next */
    return config;
  }
};

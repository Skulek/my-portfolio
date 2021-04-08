const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "1epegqgn",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-react-helmet",
  ],
};

const siteMetadata = {
  title: `Gatsby TypeScript starter`,
  description: `Gatsby TypeScript starter with styled-components. Built with the Gatsby default starter.`,
  authorName: `Scott Spence`,
  image: `/gatsby-astronaut.png`,
  siteUrl: `https://testurl.com`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  twitterUsername: `@spences10`,
  favicon: `./static/favicon.png`,
  backgroundColor: `#639`,
  themeColor: `#639`,
}

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: siteMetadata.backgroundColor,
        theme_color: siteMetadata.themeColor,
        display: `minimal-ui`,
        icon: siteMetadata.favicon, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `cambay\:400,700`,
          `arvo\:400,700`,
          `ubuntu mono\:400,700`,
        ],
      },
      display: "swap",
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

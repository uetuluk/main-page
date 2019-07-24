/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `tr`, `zh`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/en` when connecting `/`
        redirect: true,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Utku Ege Tuluk - Portfolio`,
        short_name: `Portfolio`,
        description: `This is the page for my portfolio.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#F8C053`,
        theme_color: `#F8C053`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        localize: [
          {
            start_url: `/tr/`,
            lang: `tr`,
            name: "Utku Ege Tuluk - Portfolyo",
            short_name: `Portfolyo`,
            description: `Portfolyom için websitesi.`,
          },
          {
            start_url: `/zh/`,
            lang: `zh`,
            name: "陆胜 - 投资组合",
            short_name: `投资组合`,
            description: `是一个包括我的投资组合的网站。`,
          }
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ]
}

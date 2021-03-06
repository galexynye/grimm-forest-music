module.exports = {
  siteMetadata: {
    title: 'Grimm Forest Music & Sound',
    author: 'Alex Nye',
    description: 'Pro Music Services',
    siteUrl: 'https://www.grimmforestmusic.com',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    //Note: I have excluded tag pages in the gatsby sitemap plugin via inside the node modules - see here under options for how / why https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/
    // `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/grimmsitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: ["/tags/*", "/blog/*"],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 27px; z-index: 1; overflow: visible`,
              // wrapperStyle: `margin-bottom: 1.2rem;`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1170,
              // TODO: Change 1170 to a variable
              // wrapperStyle: `margin-bottom: 1.0725rem`
              // wrapperStyle: `margin-bottom: 1.2rem; z-index: -1`,
              wrapperStyle: `margin-bottom: 27px; z-index: -1`,
              // wrapperStyle: `margin-bottom: 1.2rem;`,
            },
          },

          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',

        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-75427625-2`,
      },
    },
    // `gatsby-plugin-feed`, //Something with blog
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Grimm Forest Music`,
        short_name: `GFM`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/GrimmGraphics/grimmfavicon180.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-netlify`, // need to stay last in plugin
      options: {
        headers: {
          "/*": [
            "X-Frame-Options: SAMEORIGIN"
          ],
          "/post/*": [
            "X-Frame-Options: SAMEORIGIN"
          ],
          "/article/*": [
            "X-Frame-Options: SAMEORIGIN"
          ]
        }, // option to add more headers. `Link` headers are transformed by the below criteria      
      }, // Needs to stay the last in Array of plugins
    }
  ],
}

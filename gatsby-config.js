module.exports = {
  siteMetadata: {
    title: "Project2_joongna",
    author: "mcar100",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: `product`,
        path: `${__dirname}/product`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: `Icon/category`,
        path: `${__dirname}/src/Icon/category`,
      },     
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],    
      },
    },
  ],
};

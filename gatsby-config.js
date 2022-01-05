module.exports = {
  siteMetadata: {
    title: "Project2_joongna",
    author: "mcar100",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: "gatsby-plugin-mdx",
      options: {
          extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: `product`,
        path: `${__dirname}/product`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
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
    `gatsby-transformer-remark`,
  ],
};

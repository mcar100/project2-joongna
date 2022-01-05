//const path = require("path")

// gatsby-node.js
function dedupeCategories(allMdx) {
  const uniqueCategories = new Set()
  // Iterate over all articles
  allMdx.edges.forEach(({ node }) => {
    // Iterate over each category in an article
    node.frontmatter.categories.forEach(category => {
      uniqueCategories.add(category)
    })

  })
  // Create new array with duplicates removed
  return Array.from(uniqueCategories)
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const { data: {allMdx}, } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              categories
            }
            id
            slug
          }
        }
      }
    }
  `)

  /*
  if(result.errors) {
    reporter.panicOnBuild(' ERROR: fail in "createPages" query')
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({node},index)=>{
      createPage({
      path: `/product/${node.slug}`,
      component: path.resolve(`./src/components/posts-page-layout.js`),
      context: { id: node.id }
      })
    })
  */
    const dedupedCategories = dedupeCategories(allMdx)
    // Iterate over categories and create page for each
    dedupedCategories.forEach(category => {
      reporter.info(`Creating page: categories/${category}`)
      createPage({
        path: `category/${category}`,
        component: require.resolve("./src/pages/search/categories.js"),
        // Create props for our CategoryList.js component
        context: {
          category,
          // Create an array of ids of articles in this category
          ids: allMdx.edges
            .filter(({ node }) => {
              return (node.frontmatter.categories.includes(category))
            })
            .map(({node}) => node.id),
        },
      })
    })
}
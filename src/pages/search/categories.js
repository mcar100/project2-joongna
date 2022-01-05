// CategoryList.js fail
import React from "react"
import { Link, graphql } from "gatsby"

const CategoryList = ({
    pageContext: { category },
    data: { allMdx },
  }) => (
    <div>
      <h1>{category} Articles</h1>
      <ul>
        {allMdx.edges.map(({ node }) => {
          return (
            <li key={node.frontmatter.title}>
              <Link to={`/product/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
              <div>
                <time>{node.frontmatter.date}</time>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )

export const query = graphql`
  query ($ids: [String]!) {
    allMdx(filter: {id: {in: $ids}}) {
      edges {
        node {
          frontmatter {
            date
            title
          }
          id
          slug
        }
      }
    }
  }
`

export default CategoryList
import * as React from 'react'
import { graphql, Link } from 'gatsby'
import ProductLayout from '../../components/productLayout'

const ProductList = ({ data }) => {

    return (

    <ProductLayout pageTitle="상품목록">
        {
            data.allMdx.nodes.map((node) =>(
                <div key={node.id}>
                    <Link to={`/product/${node.slug}`}>
                        {node.frontmatter.title}
                    </Link>
                    <p>category: {node.frontmatter.category}</p>
                    <p>price: {node.frontmatter.price}</p>
                    <p>date: {node.frontmatter.date}</p>
                </div>
                
            ))
        }
    </ProductLayout>

    )
  }

  export const query = graphql`
    query{
        allMdx{
            nodes{
                frontmatter {
                    title
                    price
                    hero_image
                    date
                    category
                }
            id
            slug
            }
        }
  }`

export default ProductList
import * as React from 'react'
import { graphql, Link } from 'gatsby'
import ProductLayout from '../../components/productLayout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { product_list_item, product_info_date
 } from '../../components/layout.module.css'

const ProductList = ({ data }) => {

    return (
    <ProductLayout pageTitle="상품목록">
        {
            data.allMdx.nodes
                .map((node) =>(
                    <Link to={`/product/${node.slug}`} style={{ textDecoration: 'none'}} key={node.id}>
                        <div className={product_list_item}>
                            <GatsbyImage style={{width: '120px',  height: '120px'}}image={getImage(node.frontmatter.hero_image)} alt={node.frontmatter.hero_image_alt}/>
                            <div>
                                <p>{node.frontmatter.title}</p>
                                <strong>{node.frontmatter.price}</strong>
                                <p className={product_info_date}>{node.frontmatter.date}</p>
                            </div>

                        </div>    
                    </Link>
            ))
        }
    </ProductLayout>

    )
  }

  export const query = graphql`
    query{
        allMdx(sort: {fields: frontmatter___date, order: ASC}) {
            nodes {
              id
              slug
              frontmatter {
                title
                date
                price
                hero_image_alt
                hero_image {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
  }`

export default ProductList
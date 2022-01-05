import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ProductLayout from '../../components/productLayout'
import { 
  product_info_price,
  product_info_date, 
  product_info_body,
  product_info_etc,     
} from '../../components/layout.module.css'

const ProductPost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.hero_image);
    const title = data.mdx.frontmatter.title;

    return (
      <ProductLayout pageTitle={title}>   
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt}/>
        
        <h3>{title}</h3>
        <strong className={product_info_price}>{data.mdx.frontmatter.price}</strong>
        <p className={product_info_date}>{data.mdx.frontmatter.date}</p>
        <p className={product_info_body}>상품설명</p>

        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>

        <div className={product_info_etc}>
          <p>adr: {data.mdx.frontmatter.place}</p>
          <p>tel: {data.mdx.frontmatter.phone}</p>
        </div>

      </ProductLayout>
    )
  }

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
        price
        place
        phone
        date
        hero_image_alt
        hero_image {
          childImageSharp{
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default ProductPost
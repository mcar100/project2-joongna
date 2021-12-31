import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ProductLayout from '../../components/productLayout'

const ProductPost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.hero_image);
    const title = data.mdx.frontmatter.title;

    return (
      <ProductLayout pageTitle={title}>   
        <img
          src={image}
          alt={data.mdx.frontmatter.hero_image_alt}
        />
        <h1>{title}</h1>
        <div>카테고리: {data.mdx.frontmatter.category}</div>
        <div>가격: {data.mdx.frontmatter.price}</div>
        <div>등록일자: {data.mdx.frontmatter.date}</div>
        <div>전화번호: {data.mdx.frontmatter.phone}</div>
        <div>거주지: {data.mdx.frontmatter.place}</div>
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
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
        category
        hero_image_alt
        hero_image
        
      }
    }
  }
`

export default ProductPost
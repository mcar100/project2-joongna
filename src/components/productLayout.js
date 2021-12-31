import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { navigate } from 'gatsby'
import{
    container,
} from './layout.module.css'


const ProductLayout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <main>
      <nav>
        <div>
          <button onClick={()=> navigate(-1)}>
            뒤로가기
          </button>
        </div>
      </nav>
        {children}
      </main>
    </div>
  )
}
export default ProductLayout


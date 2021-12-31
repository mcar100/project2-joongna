import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import{
    quickMenu_Items,
} from './layout.module.css'

// quick category layout
const CategoryLayout = ({ link, src, children }) => {

  return (
          <li className={quickMenu_Items}>
              <Link to={link} style={{textDecoration: 'none', color: 'black'}}>
                  <GatsbyImage src={src} alt={children}>{children}</GatsbyImage>
                  <span>{children}</span>
                </Link>
            </li>
  )
}
export default CategoryLayout
import * as React from 'react'
import { Link } from 'gatsby'
import{
    quickMenu_Items,
} from './layout.module.css'

// quick category layout
const CategoryLayout = ({ link, src, children }) => {

  return (
          <li className={quickMenu_Items}>
              <Link to={link} style={{textDecoration: 'none', color: 'black'}}>
                  <img src={src} alt={children}/>
                  <p>{children}</p>
                </Link>
          </li>
  )
}
export default CategoryLayout
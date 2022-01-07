import React from "react"
import { Link } from "gatsby"
import { bottom_bar } from './layout.module.css'

const BottomBar = (location) => {
    return(
    <div className={bottom_bar}>
        <Link to="/product/enroll" state={{object: location.state}}
            style={{textDecoration: 'none', color: 'white'}}
        >상품 등록</Link>
    </div>
    )
}

export default BottomBar
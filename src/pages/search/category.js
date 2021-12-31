import { Link } from 'gatsby'
import * as React from 'react'
import {
    container
} from '../../components/layout.module.css'


const CategoryPage = () => {
    return(
        <div className={container}>
        <div>카테고리</div><Link to="/">x</Link>
        <ul>
            <li>패션의류</li>
            <li>가전제품</li>
            <li>게임</li>
            <li>스포츠</li>
        </ul>        
        </div>

    )
}

export default CategoryPage
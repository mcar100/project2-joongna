import { graphql} from 'gatsby'
import * as React from 'react'
import{ quickMenu_Links, 
    container,
    category_wrap,
    category_title, 
    category_box,
    icClose, } from '../../components/layout.module.css'
import CategoryLayout from '../../components/categoryLayout.js'
import ButtonLayout from '../../components/buttonLayout.js'


const CategoryPage = ({ data }) => {
    return(
    <div className={container}>
        <header className={category_wrap}>
            <div className={category_title}>카테고리</div>
            <ButtonLayout option={icClose}/>
        </header>

        <ul className={quickMenu_Links}>
            {
            data.allFile.edges.map((edge)=>(
                <div className={category_box} key={edge.node.id}>
                    <CategoryLayout link="/product/productList/" src={edge.node.publicURL} children={edge.node.name}/>
                </div>
                
            ))
            }
        </ul>
    </div>
    )
}

export const query = graphql`
    query{
        allFile(filter: {sourceInstanceName: {eq: "Icon/category"}}) {
            edges {
                node {
                    id
                    publicURL
                    name
                }
            }
        }
    }
    `

export default CategoryPage
import React, {useEffect, useState} from 'react'
import{ quickMenu_Links, 
    container,
    category_wrap,
    category_title, 
    category_box,
    icClose, } from '../../components/layout.module.css'
import ButtonLayout from '../../components/buttonLayout.js'
import CategoryLayout from '../../components/categoryLayout.js'

const CategoryPage = () => {
    const [state, setState] = useState(null);

    useEffect(()=>{
        setState(getIcon())
      },[]);
      
      console.log(state);

    return(
    <div className={container}>
        <header className={category_wrap}>
            <div className={category_title}>카테고리</div>
            <ButtonLayout option={icClose}/>
        </header>

        <ul className={quickMenu_Links}>
            {
                state.map((state)=>(
                <div className={category_box} key={state.id}>
                    <CategoryLayout link="/product/list" src={state.img_url} children={state.img_alt}/>
                </div>
                
            ))
            }
        </ul>
    </div>
    )
}

const getIcon = () => {
    const url = "../../Icon/category"
    return [{
        id: 1,
        img_url: url+"/가구,인테리어.png",
        img_alt: "가구/인테리어"
    },
    {
        id: 2,
        img_url: url+"/가전제품.png",
        img_alt: "가전제품"
    },
    {
        id: 3,
        img_url: url+"/게임.png",
        img_alt: "게임"
    },
    {
        id: 4,
        img_url: url+"/노트북,데스크탑.png",
        img_alt: "노트북/데스크탑"
    },
    {
        id: 5,
        img_url: url+"/도서,음반,문구.png",
        img_alt: "도서/음반/문구"
    },
    {
        id: 6,
        img_url: url+"/모바일,태블릿.png",
        img_alt: "모바일/태블릿"
    },
    {
        id: 7,
        img_url: url+"/뷰티.png",
        img_alt: "뷰티"
    },
    {
        id: 8,
        img_url: url+"/스포츠.png",
        img_alt: "스포츠"
    },
    {
        id: 9,
        img_url: url+"/출산,유아동.png",
        img_alt: "출산/유아동"
    },
    {
        id: 10,
        img_url: url+"/패션의류.png",
        img_alt: "패션의류"
    },
    {
        id: 11,
        img_url: url+"/패션잡화.png",
        img_alt: "패션잡화"
    },
    ]
}

/*
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
*/
export default CategoryPage
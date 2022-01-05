import React, {useEffect, useState} from 'react'
import { Link } from 'gatsby'
import ProductLayout from '../../components/productLayout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { product_list_item, product_info_date
 } from '../../components/layout.module.css'

const List = () => {
    const [state,setState] = useState(null)
    useEffect(()=>{
      setState(getData())
    },[])
    console.log(state);

    return (
      /*
    <ProductLayout pageTitle="상품목록">
      {
         list.map((state) =>( 
            <Link to={`/product/${state.id}`} style={{ textDecoration: 'none'}} key={state.id}>
              <div className={product_list_item}>
                <GatsbyImage style={{width: '120px',  height: '120px'}} image={getImage(state.hero_image)} alt={state.hero_image_alt}/>
                  <div>
                    <p>{state.title}</p>
                    <strong>{state.price}</strong>
                    <p className={product_info_date}>{state.date}</p>
                  </div>
              </div>    
            </Link>
          ))
        }
    </ProductLayout>
    )
    */
   <></>)
  }

  const getData = ()=>{

    return [{
        id:1,
        title: "중고 삼성갤럭시노트10",
        date: "2021.12.31 15:12:50",
        category: ["모바일"],
        price: "250,000",
        place: "서울 강남구 선릉로67",
        phone: "010-1111-2222",
        hero_image: "./image/mark-chan-Ilm-7E0g3ro-unsplash.jpg",
        hero_image_alt: "삼갤노트10",
        hero_image_credit_text: "mark-chan-iLm",
        hero_image_credit_link: "https://unsplash.com/s/photos/samsung-galaxy-note-10",
    },
    {
        id:2,
        title: "중고 아이폰 팝니다.",
        date: "2021.1.2 15:12:50",
        categories: ["컴퓨터"],
        price: "350,000",
        place: "경기도 시흥시",
        phone: "010-2222-3333",
        hero_image: "./image/kevin-bhagat-Co-usQ-kpO0-unsplash.jpg",
        hero_image_alt: "아이폰",
        hero_image_credit_text: "kevin bhagat",
        hero_image_credit_link: "https://unsplash.com/photos/Co-usQ-kpO0",
    }]
  }

  /*
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
  */

export default List
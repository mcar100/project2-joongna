import React, {useEffect, useState} from 'react'
import { Link } from 'gatsby'
import ProductLayout from '../../components/productLayout'
import { product_list_item, product_info_date
 } from '../../components/layout.module.css'

const List = () => {
    const [lists,setLists] = useState(null)
    useEffect(()=>{
      setLists(getData())
    },[])
    console.log(lists);

    return (
      
      <ProductLayout>
      {
         lists&&lists.map((state) =>( 
            <Link to={`/product/detail`} 
            style={{ textDecoration: 'none'}} 
            key={state.id}
            state={{
              id: state.id,
              title: state.title,
              image: state.image,
              alt: state.image_alt,
              price: state.price,
              date: state.date,
              body: state.body,
              place: state.place,
              phone: state.phone,              
            }}
            >
              <div className={product_list_item}>
                  <img id={state.id} src={require(`../../image/${state.image}`).default} alt={state.image_alt}/>
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
        image: `mark-chan-Ilm-7E0g3ro-unsplash.jpg`,
        image_alt: "삼갤노트10",
        image_credit_text: "mark-chan-iLm",
        image_credit_link: "https://unsplash.com/s/photos/samsung-galaxy-note-10",
        body: `사용한지 1년밖에 안되서 상태는 멀쩡합니다. 
               관심있으신분은 연락주세요.`,
    },
    {
        id:2,
        title: "중고 아이폰 팝니다.",
        date: "2021.1.2 15:12:50",
        categories: ["컴퓨터"],
        price: "350,000",
        place: "경기도 시흥시",
        phone: "010-2222-3333",
        image: `kevin-bhagat-Co-usQ-kpO0-unsplash.jpg`,
        image_alt: "아이폰",
        image_credit_text: "kevin bhagat",
        image_credit_link: "https://unsplash.com/photos/Co-usQ-kpO0",
        body: `256기가 용량입니다. 사용하지 2년정도 된 핸드폰입니다. 
              상태는 꺠끗하며, 충전기도 같이 드립니다. 
              관심있으면 연락해주세요.`,
    }]
  }

export default List
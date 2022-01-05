/*
import React,{useEffect, useState} from 'react'

const List =(allMdx)=> {
    // Create new array with duplicates removed
    const [state,setState] = useState(null)
    
    useEffect(()=>{
        setState(getData())
    },[])


    console.log(state);

    return(
        <div>
            <div>{state[0].name}</div>     
            <div>{state[1].name}</div>     
        </div>
    )
  }

  export default List

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
  */
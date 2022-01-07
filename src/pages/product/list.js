import React, {useEffect, useState} from 'react'
import { Link } from 'gatsby'
import ProductLayout from '../../components/productLayout'
import { product_list_item, product_info_date
 } from '../../components/layout.module.css'
 //import db from "../../database/data.json"
import Data from "../../db"
import BottomBar from '../../components/bottomBar'
import { useSelector, useDispatch } from 'react-redux'
import { addToList } from '../../components/redux_practice'


const List = ({location}) => {
    const [lists,setLists] = useState();
    //const [compare,setCompare] = useState(null);

    useEffect(()=>{
      setLists(getData());
    },[])

    const getData = ()=>{
      return Data;
    }

    return (
      <ProductLayout>
      {
         lists&&lists
         .filter((state)=>{
          if( location.state.text === undefined)
             return state
          else if(state.title.toLowerCase().includes(location.state.text.toLowerCase()))
             return state
         })
         .filter((state)=>{
          if(location.state.category === undefined)
            return state
          else if(location.state.category.toLowerCase().includes(state.categories.toLowerCase()))
            return state
         })
         .map((state) =>( 
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
      <BottomBar/>
      </ProductLayout>
    )
  }

export default List
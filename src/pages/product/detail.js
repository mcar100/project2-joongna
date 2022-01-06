import * as React from 'react'
import ProductLayout from '../../components/productLayout'
import { 
  product_info_price,
  product_info_date, 
  product_info_body,
  product_info_etc,
  product_info_img,     
} from '../../components/layout.module.css'

const Detail = (props) => {
    
    const state = props.location.state;
    return (

      <ProductLayout pageTitle={state.title}>   
        <img id={state.id} className={product_info_img} src={require(`../../image/${state.image}`).default} alt={state.alt}/>
        
        <h3>{state.title}</h3>
        <strong className={product_info_price}>{state.price}</strong>
        <p className={product_info_date}>{state.date}</p>
        <p className={product_info_body}>상품설명</p>
        
        <div>{state.body}</div> 

        <div className={product_info_etc}>
          <p>adr: {state.place}</p>
          <p>tel: {state.phone}</p>
        </div>

      </ProductLayout>

    )
}

export default Detail;
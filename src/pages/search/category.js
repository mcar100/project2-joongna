import React, {useEffect, useState} from 'react'
import { Link } from 'gatsby'
import{ quickMenu_Links, 
    container,
    category_wrap,
    category_title, 
    category_box,
    icClose,
    quickMenu_Items,
     } from '../../components/layout.module.css'
import ButtonLayout from '../../components/buttonLayout.js'
import db from '../../database/data.json'

const CategoryPage = () => {
    const [state, setState] = useState(null);

    useEffect(()=>{
        setState(getIcon())
      },[]);

    const getIcon = () => {
        return [...db.CategoryIcon];
    }
    return(
    <div className={container}>
        <header className={category_wrap}>
            <div className={category_title}>카테고리</div>
            <ButtonLayout option={icClose}/>
        </header>

        <ul className={quickMenu_Links}>
            {
                state&&state.map((state)=>(
                <div className={category_box}>
                    <li key={state.id} className={quickMenu_Items}>
                        <Link to="/product/list" state={{ category: state.img_alt}}
                              style={{textDecoration: 'none', color: 'black'}}>
                            <img id={state.id} src={require(`../../Icon/category/${state.img_url}`).default} alt={state.img_alt}/>
                            <p>{state.img_alt}</p>
                        </Link>
                    </li>
               </div>
               ))
            }
        </ul>
    </div>
    )
}

export default CategoryPage
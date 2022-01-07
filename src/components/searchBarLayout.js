import React, { useState } from 'react'
import { navigate } from 'gatsby';
import{
    home_searchBar,
} from './layout.module.css'


const SearchBarLayout = () => {
  const [text,setText] = useState('');

  const enter = ()=>{
    navigate('/product/list',
    {
      state: {text},
    });

  };

  const changeHandler = (event) => {
    setText(event.target.value);
  }

  const pressHandler = (event) =>{
    if(event.key === 'Enter'){
      enter();
    }
  };

  return (
    <div className={home_searchBar}>
        <input type="text" placeholder='검색어를 입력하세요.' onKeyPress={pressHandler} onChange={changeHandler} defaultValue={text}/>
    </div>
  )
}
export default SearchBarLayout;
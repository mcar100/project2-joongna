import React from 'react'
import{
    home_searchBar,
} from './layout.module.css'


const SearchBarLayout = () => {
  return (
    <div className={home_searchBar}>
        <input placeholder='검색어를 입력하세요.'/>
    </div>
  )
}
export default SearchBarLayout
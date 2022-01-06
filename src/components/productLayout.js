import * as React from 'react'
import{
    container,
    icBack,
    head_bar,
} from './layout.module.css'
import ButtonLayout from './buttonLayout.js'
import SearchBarLayout from './searchBarLayout.js'


const ProductLayout = ({ pageTitle, children }) => {

  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <main>
      <nav>
        <div className={head_bar}>
          <ButtonLayout option={icBack}/>
          <SearchBarLayout/>
        </div>
      </nav>
        {children}
      </main>
    </div>
  )
}
export default ProductLayout


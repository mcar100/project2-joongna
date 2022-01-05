import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { 
  home_logo,
  container,
 } from '../components/layout.module.css'
import SearchBarLayout from "../components/searchBarLayout"
import QuickLayout from "../components/quickLayout"

// markup
const IndexPage = () => {

  return (
      <div className={container}>
        <title>중고나라</title> 
        <main>
        <StaticImage 
          className={home_logo}
          alt="Joongo Nara Logo" 
          src="../Icon/front_full.png" 
          placeholder="none"
          width={400}
          heigh={58}/>
        <SearchBarLayout/>
        <QuickLayout/>
        </main>   
      </div>

  )
}

export default IndexPage

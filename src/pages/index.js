import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { 
  home_logo,
  container,
 } from '../components/layout.module.css'
import BarLayout from "../components/barLayout"
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
          src="../images/front_full.png" 
          placeholder="none"
          width={400}
          heigh={58}/>
        <BarLayout/>
        <QuickLayout/>
        </main>   
      </div>

  )
}

export default IndexPage

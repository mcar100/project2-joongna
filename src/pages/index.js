import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { 
  home_logo,
  container,
 } from '../components/layout.module.css'
import SearchBarLayout from "../components/searchBarLayout"
import QuickLayout from "../components/quickLayout"
import BottomBar from "../components/bottomBar"
import { createStore } from "redux"
import rootReducer from "../components"
import ReduxList from "./product/redux_list"
import { Provider } from "react-redux"

// markup
const IndexPage = () => {
  const store = createStore(rootReducer);
  console.log(store.getState());

  

  return (
      <div className={container}>
        <title>중고나라</title> 
        <main>
        <Provider store = {store}>
          <StaticImage 
            className={home_logo}
            alt="Joongo Nara Logo" 
            src="../Icon/front_full.png" 
            placeholder="none"
            width={400}
            heigh={58}/>
          <SearchBarLayout/>
          <QuickLayout/>
          <BottomBar />
          <ReduxList/>
        </Provider>
        </main>   
      </div>

  )
}

export default IndexPage

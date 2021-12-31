import * as React from 'react'
import { Link } from 'gatsby'
import{ quickMenu_Links } from './layout.module.css'
import CategoryLayout from './categoryLayout'

import SportIcon from "../images/sports.png"
import ClothIcon from "../images/clothing.png"
import MobileIcon from "../images/mobile.png"


// quick category bar layout
const QuickLayout = () => {

  return (
      <ul className={quickMenu_Links}>
          <Link to ="/product/productList">product</Link>
          <CategoryLayout link="/search/category" src={SportIcon} >스포츠</CategoryLayout>
          <CategoryLayout link="/search/category" src={ClothIcon} >패션의류</CategoryLayout>          
          <CategoryLayout link="/search/category" src={MobileIcon} >모바일/태블릿</CategoryLayout>
          <CategoryLayout link="/search/category" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPUSURBVHgB7Zu/VhNBFMa/STacCBbxCUxpZ+jsiKWVPII8gVB5rEg6O7Czg9ZKKK2InR3wBMYnMIVKIJsd7w2Bo5tJ5u5mIRPP/Z2TwzmT+Zdv5965c3cAFEVRFEVRFMWBkVZcjdCiP6/pU0Mx9CxweBFjBzmo1VC7+olt+gEb1qJOv6R+0y+VnSUGR7aM434fXcyBSKC1MvatGYlzF7R+x2hLK1erqJdjHJC4TVEDg8OkjHZeoUQC0er5geJWTpoeCfRIUvFBhVaMxW6OufToAbcvBthHRqQCWdwhJJB3HmMT38V8tGmsVpYGJSwBvHIwvzjM7rgvMblXkE2wbUs4QwaMwTqZyF66fNYKYp9TinGKKWZFE+sgwRH13SXH3DMJGvTYN810H9VLIqzP67z/gQVKf6oRNpCRhxGarr5mjl3BgavNgzK+zZrDWgWNVarjbBvhBEKCNjFePSTfq3Q5betdO8Tzfowv09r+GtBWT3WofTf9Ha+umtDRBy2QGeKlqzwmE+rDbyJch8xuy/XdVSQLW4IWqGSxmS5jnzMY4BxCaJV1Rn5qsp+moHnYAtGPaEwUUoSMrDjaGHsbec8k9G1+wk+Q/8m0czJRgu8Theb/EGgCMrvMET1F0T3kJGyBHDsQxV51ZGRo8NRRLBItbB9kHDuVw3H7mOLsRaYa9jbv2H04hqEAsQkhHDA6dyyhsw9aoJUY713ldKw4GAWRHrgOifPJ9Z0d4BgCghaod51U66TLeYumIPKkUnGEAWP4WFOiOnBt5xaHkkCTiZATPhTSJMQZSYadpcmYOLExtkw0eVhlkSrA6UqEDmcPyxbnCe1w5MQfs89J2KxcY1k6rA7lCbqlyAeNE2V7KAB6SNuXA7fpuliKOIgzgbQiWpgT7iOLOIxUoNyBVlF905mqTdv+DvLMhcyKV04/Q+77hrKkUqWEKiDfWrNAtvshTvBZUpfqfS0n+Ei7WI2MsiHsv0OpkReXwjHSiJ3sWoQ9y7kZU1Dynp2lwX6ep8rQE6ubEqVDOHtoSaybeXGuiAJMFqZKYULvble/oiiKogRM8Lc7Fn2rRBQo8u0OkvINRuFHYVTp6TyjIBSDxP1+a1Hj/k3QtztCuFUS9Gk+hFslS/dW477JnTAr8nZHyOPmF4gmOevygAvOQCaYj/seV03MgwrkQQXyoAJ5UIE8qEAeVCAPKpAHFciDCuRBBfIQ/O2ORY+r+SAPamIeQr/dsfBbJVKBMv+nnhR+w4Dwxr1F9FaDs/8rJUqeWzwhqy3mDcP17Y53lPx6i8DGVRRFURRFURQvfwAx43WqO/NZ+QAAAABJRU5ErkJggg==" >카테고리</CategoryLayout>      
      </ul>
  )
}
export default QuickLayout
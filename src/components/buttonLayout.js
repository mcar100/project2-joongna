import { navigate } from 'gatsby'
import * as React from 'react'
import{ 
    iconBtn
 } from './layout.module.css'



const ButtonLayout = ({ option }) => {
    return(
            <button type="button" className={[iconBtn, option].join(' ')} onClick={()=> navigate(-1)}/>
    )
}

export default ButtonLayout
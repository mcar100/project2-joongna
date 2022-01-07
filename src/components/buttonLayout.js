import { navigate } from 'gatsby'
import * as React from 'react'
import{ 
    iconBtn,
    buttonLayout,
 } from './layout.module.css'



const ButtonLayout = ({ option }) => {
    return(
            <button type="button" className={[buttonLayout,iconBtn, option].join(' ')} onClick={()=> navigate(-1)}/>
    )
}

export default ButtonLayout
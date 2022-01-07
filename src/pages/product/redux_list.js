import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToList } from '../../components/redux_practice'


const ReduxList = () => {
    const { list } = useSelector(state=> state.adder);

    console.log(list);

    return (
        <></>
    )
  }

export default ReduxList
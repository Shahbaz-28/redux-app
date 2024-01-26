import React, { useContext } from 'react'
import {ContextX} from '../ContextHook/ContxtProvider'

const UseContxt = () => {

    const UseCont = useContext(ContextX)
  return (
    <div>
        <h1>{UseCont}</h1>
    </div>
  )
}

export default UseContxt
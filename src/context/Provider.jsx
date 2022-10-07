import React from 'react'
import Contexto from './Context'

import {data} from '../data/gamelist'

export const Provider = ({children}) => {
  return (


    <Contexto.Provider value={{
            data
    }}>
    
    {children}    
    </Contexto.Provider>
  )
}

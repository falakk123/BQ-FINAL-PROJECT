import React, { createContext, useReducer } from 'react'
import { reducer } from './reducer'
import Cookies from 'js-cookie';
import { useEffect } from 'react';


export const GlobalContext = createContext("Initial Value")
let data = {
  token: Cookies.get('token') || undefined
};


export default function ContextProvider({ children }) {
  const [user_state, user_dispatch] = useReducer(reducer, data);

  useEffect(() => {
    Cookies.set('token', user_state.token)
  }, [user_state.token])
  localStorage.removeItem('token');

  return (
    <GlobalContext.Provider value={{user_state, user_dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}



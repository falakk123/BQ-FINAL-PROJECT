import React, { useContext, user_state } from 'react'
import Admin from './Admin'
import User from './User'
import Guest from './Guest'
import { GlobalContext } from './Context/context'
import { decodeToken } from 'react-jwt'

const UserRole = {
  "admin": Admin,
  "guest": Guest,
  "user": User
}
 export const AppRoute = '/'


const UserByRole = (params) => UserRole[params] || UserRole['guest']
// const getDecodeToken = (token) => decodeToken(token) || null

export default function App() {

  const { user_state, user_dispatch } = useContext(GlobalContext)

  const getDecodeToken = (token) => {
    if (!token) {
      return undefined
    } else {
      const res = decodeToken(token)
      return res?.role
    }

  }

  const currentToken = getDecodeToken(user_state.token)
  const CurrentUser = UserByRole(currentToken)
  return <CurrentUser />
}






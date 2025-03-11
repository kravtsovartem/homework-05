import { createContext } from 'react'

const defaultAuthData: IAuthContextData = {
  user: '',
  signIn: false,
}

const AuthContext = createContext(defaultAuthData)

export default AuthContext
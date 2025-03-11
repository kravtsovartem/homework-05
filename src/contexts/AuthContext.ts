import { createContext } from 'react'

const defaultAuthData: IAuthContextData = {
  user: '',
  signIn: false,
	login(user, callback) {

		this.signIn = true
		this.user = user

		if(callback) callback()
	},
	logout(callback) {
		
		this.signIn = false
		this.user = ''

		if(callback) callback()
	}
}

const AuthContext = createContext(defaultAuthData)

export default AuthContext
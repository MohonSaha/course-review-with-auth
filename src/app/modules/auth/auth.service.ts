import { ILoginUser, IUser } from './auth.interface'
import { User } from './auth.model'

const registerUserIntoDB = async (payload: IUser) => {
  const result = await User.create(payload)
  return result
}

const loginUser = async (payload: ILoginUser) => {
  console.log(payload)
  return {}
}

export const AuthService = {
  registerUserIntoDB,
  loginUser,
}

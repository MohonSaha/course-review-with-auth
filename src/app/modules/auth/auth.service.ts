import httpStatus from 'http-status'
import AppError from '../../error/appError'
import { ILoginUser, IUser } from './auth.interface'
import { User } from './auth.model'
import jwt from 'jsonwebtoken'
import config from '../../config'

const registerUserIntoDB = async (payload: IUser) => {
  const result = await User.create(payload)
  return result
}

const loginUser = async (payload: ILoginUser) => {
  // Check if the user is exist
  const user = await User.isUserExistByUserName(payload?.username)
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found')
  }

  // Check if the password is matched
  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched')
  }

  // Access is granted ==> Create access token and Send to the user

  // Create jwt payload
  const jwtPayload = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    id: (user as any)._id,
    email: user.email,
    role: user.role,
  }

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '15d',
  })

  return {
    user: user,
    token: accessToken,
  }
}

export const AuthService = {
  registerUserIntoDB,
  loginUser,
}

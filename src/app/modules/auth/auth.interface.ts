import { Model } from 'mongoose'

export interface IUser {
  username: string
  email: string
  password: string
  role: 'user' | 'admin'
}

export interface ILoginUser {
  username: string
  password: string
}

export interface UserModel extends Model<IUser> {
  // eslint-disable-next-line no-unused-vars
  isUserExistByUserName(id: string): Promise<IUser>

  isPasswordMatched(
    // eslint-disable-next-line no-unused-vars
    plainTextPassword: string,
    // eslint-disable-next-line no-unused-vars
    hashPassword: string,
  ): Promise<boolean>
}

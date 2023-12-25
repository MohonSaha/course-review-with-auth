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

import { z } from 'zod'

const registrationValidationSchema = z.object({
  body: z.object({
    username: z.string({ required_error: 'user name is required' }),
    email: z.string({ required_error: 'email is required' }).email(),
    password: z.string({ required_error: 'Password is required' }),
    role: z.enum(['user', 'admin']),
  }),
})

const loginValidationSchema = z.object({
  body: z.object({
    username: z.string({ required_error: 'user name is required' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
})

const changePasswordValidationSchema = z.object({
  body: z.object({
    oldPassword: z.string({ required_error: 'old password is required' }),
    newPassword: z.string({ required_error: 'new password is required' }),
  }),
})

export const AuthValidation = {
  registrationValidationSchema,
  loginValidationSchema,
  changePasswordValidationSchema,
}

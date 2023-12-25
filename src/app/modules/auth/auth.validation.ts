import { z } from 'zod'

const registrationValidationSchema = z.object({
  body: z.object({
    username: z.string({ required_error: 'user name is required' }),
    email: z.string({ required_error: 'enail is required' }),
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

export const AuthValidation = {
  registrationValidationSchema,
  loginValidationSchema,
}

import { Schema, model } from 'mongoose'
import { IUser } from './auth.interface'
import AppError from '../../error/appError'
import httpStatus from 'http-status'

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

// Validation for duplicate user name
userSchema.pre('save', async function (next) {
  const isUsernameExist = await User.findOne({
    username: this.username,
  })
  if (isUsernameExist) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'This user name is already exist',
    )
  }
  next()
})

// Validation for duplicate email
userSchema.pre('save', async function (next) {
  const isEmailExist = await User.findOne({
    email: this.email,
  })
  if (isEmailExist) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This email is already exist')
  }
  next()
})

export const User = model<IUser>('user', userSchema)

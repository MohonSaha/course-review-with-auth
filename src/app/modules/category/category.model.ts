import { Schema, model } from 'mongoose'
import { ICategory } from './category.interface'
import AppError from '../../error/appError'
import httpStatus from 'http-status'

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

// Validation for duplicate course name
categorySchema.pre('save', async function (next) {
  const isCategoryExist = await Category.findOne({
    name: this.name,
  })
  if (isCategoryExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'This Caregory is already exist')
  }
  next()
})

export const Category = model<ICategory>('category', categorySchema)

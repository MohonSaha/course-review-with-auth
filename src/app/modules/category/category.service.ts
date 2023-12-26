import { JwtPayload } from 'jsonwebtoken'
import { ICategory } from './category.interface'
import { Category } from './category.model'

const createCategoryIntoDB = async (payload: ICategory, user: JwtPayload) => {
  payload.createdBy = user.id

  const result = await Category.create(payload)
  return result
}

const getAllCategoriesFromDB = async () => {
  const result = await Category.find().populate({
    path: 'createdBy',
    select: '_id username email role',
  })
  return result
}

export const categoryServices = {
  createCategoryIntoDB,
  getAllCategoriesFromDB,
}

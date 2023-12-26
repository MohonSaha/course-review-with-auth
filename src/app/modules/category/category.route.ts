import express from 'express'
import { categoryControllers } from './category.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../auth/auth.constant'

const router = express.Router()

router.post(
  '/categories',
  auth(USER_ROLE.admin),
  categoryControllers.createCategory,
)
router.get('/categories', categoryControllers.getAllCategories)

export const CategoryRoutes = router

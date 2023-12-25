import express from 'express'
import { categoryControllers } from './category.controller'

const router = express.Router()

router.post('/categories', categoryControllers.createCategory)
router.get('/categories', categoryControllers.getAllCategories)

export const CategoryRoutes = router

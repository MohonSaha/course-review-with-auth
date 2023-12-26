import express from 'express'
import { reviewControllers } from './review.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../auth/auth.constant'

const router = express.Router()

router.post('/reviews', auth(USER_ROLE.user), reviewControllers.createReview)
router.get('/reviews', reviewControllers.getAllReviews)

export const ReviewRoutes = router

import express from 'express'
import { reviewControllers } from './review.controller'

const router = express.Router()

router.post('/reviews', reviewControllers.createReview)
router.get('/reviews', reviewControllers.getAllReviews)

export const ReviewRoutes = router

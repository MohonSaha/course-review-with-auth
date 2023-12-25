import httpStatus from 'http-status'
import AppError from '../../error/appError'
import { IReview } from './review.interface'
import { Review } from './review.model'

const createReviewIntoDB = async (payload: IReview) => {
  const { rating } = payload

  if (Number.isInteger(rating) && rating >= 1 && rating <= 5) {
    const result = await Review.create(payload)
    return result
  } else {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `${rating} is not a valid input, keep the raing value between 1 to 5.`,
    )
  }
}

const getAllReviewsFromDB = async () => {
  const result = await Review.find()
  return result
}

export const reviewServices = {
  createReviewIntoDB,
  getAllReviewsFromDB,
}

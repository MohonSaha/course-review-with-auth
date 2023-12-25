import { Schema, model } from 'mongoose'
import { IReview } from './review.interface'

const reviewSchema = new Schema<IReview>(
  {
    courseId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    rating: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  },
)

export const Review = model<IReview>('review', reviewSchema)

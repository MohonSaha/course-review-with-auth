import { Schema, model } from 'mongoose'
import { IReview, IUserData } from './review.interface'

const userDataSchema = new Schema<IUserData>({
  _id: {
    type: Schema.Types.ObjectId,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  role: {
    type: String,
  },
})

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
    createdBy: userDataSchema,
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

export const Review = model<IReview>('review', reviewSchema)

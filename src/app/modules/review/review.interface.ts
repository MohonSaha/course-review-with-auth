import { Types } from 'mongoose'

export interface IReview {
  courseId: Types.ObjectId
  rating: 1 | 2 | 3 | 4 | 5
  review: string
}

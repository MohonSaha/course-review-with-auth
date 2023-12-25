import express from 'express'
import { courseControllers } from './course.controller'
import validateRequest from '../../middlewares/validateRequest'
import { CourseValidations } from './course.validation'

const router = express.Router()

router.post(
  '/course',
  validateRequest(CourseValidations.createCourseValidationSchema),
  courseControllers.createCourse,
)

router.get('/courses', courseControllers.getAllCourses)
router.get('/courses/:id', courseControllers.getCourseWithReview)
router.get('/course/best', courseControllers.getTheBestCourse)

router.put(
  '/courses/:id',
  validateRequest(CourseValidations.updateCourseValidationSchema),
  courseControllers.updateCourse,
)

export const CourseRoutes = router

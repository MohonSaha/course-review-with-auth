import express from 'express'
import { courseControllers } from './course.controller'
import validateRequest from '../../middlewares/validateRequest'
import { CourseValidations } from './course.validation'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../auth/auth.constant'

const router = express.Router()

router.post(
  '/course',
  auth(),
  validateRequest(CourseValidations.createCourseValidationSchema),
  courseControllers.createCourse,
)

router.get('/courses', auth(USER_ROLE.admin), courseControllers.getAllCourses)
router.get('/courses/:id', courseControllers.getCourseWithReview)
router.get('/course/best', courseControllers.getTheBestCourse)

router.put(
  '/courses/:id',
  validateRequest(CourseValidations.updateCourseValidationSchema),
  courseControllers.updateCourse,
)

export const CourseRoutes = router

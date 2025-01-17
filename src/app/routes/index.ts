import { Router } from 'express'
import { CourseRoutes } from '../modules/course/course.route'
import { CategoryRoutes } from '../modules/category/category.route'
import { ReviewRoutes } from '../modules/review/review.route'
import { AuthRoutes } from '../modules/auth/auth.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/',
    route: CourseRoutes,
  },
  {
    path: '/',
    route: CategoryRoutes,
  },
  {
    path: '/',
    route: ReviewRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
]

// router.use('/', CourseRoutes)  => Aboid this code repeatation and use loop
moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router

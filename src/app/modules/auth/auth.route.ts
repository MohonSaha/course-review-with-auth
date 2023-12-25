import express from 'express'
import { AuthValidation } from './auth.validation'
import validateRequest from '../../middlewares/validateRequest'
import { AuthController } from './auth.controller'

const router = express.Router()

router.post(
  '/register',
  validateRequest(AuthValidation.registrationValidationSchema),
  AuthController.registerUser,
)

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthController.loginUser,
)

export const AuthRoutes = router

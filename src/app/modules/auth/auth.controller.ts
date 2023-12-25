import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { AuthService } from './auth.service'

const registerUser = catchAsync(async (req, res) => {
  const result = await AuthService.registerUserIntoDB(req.body)
  const modifiedResult = JSON.parse(JSON.stringify(result))
  delete modifiedResult.password

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'User registered successfully',
    data: modifiedResult,
  })
})

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthService.loginUser(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User login successful',
    data: result,
  })
})

export const AuthController = {
  registerUser,
  loginUser,
}

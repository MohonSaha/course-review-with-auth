import httpStatus from 'http-status'
import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken'
import { TGenericErrorResponse } from '../interface/error'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleJwtError = (error: any): TGenericErrorResponse => {
  let statusCode = httpStatus.UNAUTHORIZED
  let message = 'JWT Authorization Error'
  let errorMessage = error.message

  if (error instanceof TokenExpiredError) {
    // Handle token expiration error
    statusCode = httpStatus.UNAUTHORIZED
    message = 'JWT Token Expired'
    errorMessage = 'The provided JWT token has expired.'
  } else if (error instanceof JsonWebTokenError) {
    // Handle generic JWT error
    statusCode = httpStatus.UNAUTHORIZED
    message = 'JWT Token Error'
    errorMessage = 'Invalid JWT token.'
  }

  return { statusCode, message, errorMessage }
}

export default handleJwtError

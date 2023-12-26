import { NextFunction, Response, Request } from 'express'
import catchAsync from '../utils/catchAsync'
import AppError from '../error/appError'
import httpStatus from 'http-status'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config'
import { TUserRole } from '../modules/auth/auth.interface'

const auth = (...requiredRole: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization

    // If the used is sent token
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized')
    }

    // Check if the token is valid
    jwt.verify(
      token,
      config.jwt_access_secret as string,
      function (err, decoded) {
        // err
        if (err) {
          throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized')
        }

        // role checking
        const role = (decoded as JwtPayload).role
        if (requiredRole && !requiredRole.includes(role)) {
          throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized')
        }

        req.user = decoded as JwtPayload
        next()
      },
    )
  })
}

export default auth

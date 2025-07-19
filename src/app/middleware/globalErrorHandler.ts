import { NextFunction, Request, Response } from "express"
import { envVars } from "../config/env"

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = 500
    const message = `Something went wrong!!`
    res.status(statusCode).json({
        statusCode,
        success: false,
        message,
        err,
        stack: envVars.NODE_DEV=== "development" ? err.stack : null
    })
}
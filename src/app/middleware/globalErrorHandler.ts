import { NextFunction, Request, Response } from "express"
import { envVars } from "../config/env"
import AppError from "../errorHelpers/AppError"

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = 500
    let message = `Something went wrong!!`
    if(err instanceof AppError){
        statusCode=err.statusCode;
        message = err.message;
    }else if(err instanceof Error){
        statusCode =500;
        message= err.message
    }
    res.status(statusCode).json({
        statusCode,
        success: false,
        message,
        err,
        stack: envVars.NODE_DEV=== "development" ? err.stack : null
    })
}